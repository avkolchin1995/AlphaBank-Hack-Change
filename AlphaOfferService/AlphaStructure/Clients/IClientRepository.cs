namespace AlphaOfferService.AlphaStructure.Clients
{
    public interface IClientRepository
    {
        public Task<IClient?> GetClientByIdAsync(string clientId);
    }
}
