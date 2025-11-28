using AlphaOfferService.AlphaStructure.Clients;
using AlphaOfferService.Core;

namespace AlphaOfferService.Models
{
    internal class IncomeModel : IIncomeModel
    {
        public Task<int> CalculateClientIncome(IClient client)
        {
            return Task.FromResult(int.Parse(client.Id) + 2);
        }
    }
}
