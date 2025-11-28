using AlphaOfferService.AlphaStructure.Clients;
using AlphaOfferService.Core;
using Microsoft.AspNetCore.Mvc;

namespace AlphaOfferService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class IncomeController : ControllerBase
    {
        private readonly IIncomeService _incomeService;

        private readonly IClientRepository _clientRepository;

        public IncomeController(IIncomeService incomeService, IClientRepository clientRepository)
        {
            _incomeService = incomeService;
            _clientRepository = clientRepository;
        }

        [HttpGet("{clientId}", Name = "GetClientIncome")]
        public async Task<IResult> GetClientIncomeAsync(string clientId)
        {
            var client = await _clientRepository.GetClientByIdAsync(clientId);
            if (client == null)
                return Results.NotFound(new { Reason = $"Client {clientId} was not found!" });

            var income = await _incomeService.GetClientIncomeAsync(client);
            return Results.Ok(new { ClientId = clientId, Income = income });
        }
    }
}
