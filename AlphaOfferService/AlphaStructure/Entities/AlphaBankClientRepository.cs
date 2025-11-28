using AlphaOfferService.AlphaStructure.Clients;

namespace AlphaOfferService.AlphaStructure.Entities
{
    public class AlphaBankClientRepository : IClientRepository
    {
        private readonly List<AlphaBankClient> _clients =
        [
            new AlphaBankClient("1"),
            new AlphaBankClient("2"),
            new AlphaBankClient("3"),
        ];

        public async Task<IClient?> GetClientByIdAsync(string clientId)
        {
            return await Task.FromResult(_clients.FirstOrDefault(c => c.Id == clientId));
        }
    }
}
