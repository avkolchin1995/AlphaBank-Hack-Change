using AlphaOfferService.AlphaStructure.Clients;
using AlphaOfferService.AlphaStructure.Entities;
using AlphaOfferService.AlphaStructure.Services;
using AlphaOfferService.Core;
using AlphaOfferService.Models;
using AlphaOfferService.Services;
using Microsoft.EntityFrameworkCore;

namespace AlphaOfferService
{
    internal class Program
    {
        private static async Task Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            var modelPath = Path.Combine(AppContext.BaseDirectory, "model.onnx");
            builder.Services.AddSingleton<IIncomeModel>(new MarkModel(modelPath));

            var clientDbPath = Path.Combine(AppContext.BaseDirectory, "users.sqlite");
            builder.Services.AddDbContext<AlphaBankClientRepository>(options => 
                options.UseSqlite($"Data Source={clientDbPath}"));
            builder.Services.AddScoped<IClientRepository, AlphaBankClientRepository>(provider => 
                provider.GetRequiredService<AlphaBankClientRepository>());

            builder.Services.AddScoped<AlphaBankDatabaseInitializer>();

            builder.Services.AddScoped<IIncomeService, ModelIncomeService>();

            builder.Services.AddControllers();

            var app = builder.Build();

            app.UseHttpsRedirection();
            app.UseAuthorization();

            var apiVersion1 = app.MapGroup("api/v1");
            apiVersion1.MapControllers();

            using (var scope = app.Services.CreateScope())
            {
                await scope.ServiceProvider.GetRequiredService<AlphaBankDatabaseInitializer>().InitializeDatabase();
            }

            await app.RunAsync();
        }
    }
}
