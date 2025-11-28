using AlphaOfferService.AlphaStructure.Clients;

namespace AlphaOfferService.Core
{
    public interface IIncomeModel
    {
        public Task<int> CalculateClientIncome(IClient client);
    }
}
