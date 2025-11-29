using AlphaOfferService.AlphaStructure.Entities;
using Microsoft.EntityFrameworkCore;

namespace AlphaOfferService.AlphaStructure.Services
{
    public class AlphaBankDatabaseInitializer
    {
        private readonly AlphaBankClientRepository _repository;

        public AlphaBankDatabaseInitializer(AlphaBankClientRepository repository)
        {
            _repository = repository;
        }

        public async Task InitializeDatabase()
        {
            if (await _repository.Database.CanConnectAsync())
            {
                Console.WriteLine("Соединение с базой данной прошло успешно!");
            }
            else
            {
                Console.WriteLine("База данных не существует. Создание базы данных...");
                await _repository.Database.EnsureCreatedAsync();
                Console.WriteLine("База данных успешно создана.");
            }
        }
    }
}
