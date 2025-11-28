using AlphaOfferService.AlphaStructure.Clients;

namespace AlphaOfferService.Core
{
    public interface IIncomeService
    {
        public Task<int> GetClientIncomeAsync(IClient client);
    }
}
