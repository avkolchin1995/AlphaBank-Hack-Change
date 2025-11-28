using AlphaOfferService.AlphaStructure.Clients;
using AlphaOfferService.Core;

namespace AlphaOfferService.Services
{
    internal class ModelIncomeService : IIncomeService
    {
        private readonly IIncomeModel _incomeModel;

        public ModelIncomeService(IIncomeModel incomeModel)
        {
            _incomeModel = incomeModel;
        }

        public async Task<int> GetClientIncomeAsync(IClient client)
        {
            return await _incomeModel.CalculateClientIncome(client);
        }
    }
}
