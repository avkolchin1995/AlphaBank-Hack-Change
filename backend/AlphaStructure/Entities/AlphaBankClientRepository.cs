using AlphaOfferService.AlphaStructure.Clients;
using Microsoft.EntityFrameworkCore;

namespace AlphaOfferService.AlphaStructure.Entities
{
    public class AlphaBankClientRepository : DbContext, IClientRepository
    {
        public DbSet<AlphaBankClient> Clients { get; set; }

        public AlphaBankClientRepository(DbContextOptions<AlphaBankClientRepository> options) : base(options)
        {
        }

        public async Task<IClient?> GetClientByIdAsync(string clientId)
        {
            return await Clients.FirstOrDefaultAsync(c => c.Id == clientId);
        }
    }
}
