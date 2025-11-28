using AlphaOfferService.AlphaStructure.Clients;

namespace AlphaOfferService.AlphaStructure.Entities
{
    public class AlphaBankClient : IClient
    {
        public string Id { get; set; }

        public AlphaBankClient(string id)
        {
            Id = id;
        }
    }
}
