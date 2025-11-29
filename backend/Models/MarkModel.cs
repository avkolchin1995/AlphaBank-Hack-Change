using AlphaOfferService.AlphaStructure.Clients;
using AlphaOfferService.Core;
using Microsoft.ML.OnnxRuntime;
using Microsoft.ML.OnnxRuntime.Tensors;

namespace AlphaOfferService.Models
{
    internal class MarkModel : IIncomeModel, IDisposable
    {
        private readonly InferenceSession _session;

        public MarkModel(string modelPath)
        {
            if (!File.Exists(modelPath))
                throw new FileNotFoundException($"ONNX модель по пути '{modelPath}' не найдена!");

            _session = new InferenceSession(modelPath);
        }

        public async Task<double> CalculateClientIncome(IClient client)
        {
            float[] inputData =
            [
                client.Age,
                (float)client.Gender,
                client.AverageSalary,
                client.IsSalaryKnown ? 1.0f : 0.0f,
                client.AverageRegionIncomePerCapita,
                client.AverageCurrentCreditTurnover,
                client.IsNaTurnOtherCrAvgAct ? 1.0f : 0.0f,
                client.SupermarketTransactionCategoryPercent,
                client.RestaurantTransactionCategoryPercent,
                client.AverageMonthlyTravelCategoryTransactionAmountOverYear,
            ];

            DenseTensor<float> inputTensor = new(inputData, [1, inputData.Length]);
            List<NamedOnnxValue> inputs = [NamedOnnxValue.CreateFromTensor("features", inputTensor)];

            using var results = _session.Run(inputs);
            var output = results[0].AsTensor<float>();
            var predictedIncome = output[0];

            return await Task.FromResult(Math.Exp(predictedIncome) - 1);
        }

        public void Dispose()
        {
            _session?.Dispose();
        }
    }
}