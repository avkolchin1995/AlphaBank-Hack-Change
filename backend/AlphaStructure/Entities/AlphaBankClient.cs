using AlphaOfferService.AlphaStructure.Clients;

namespace AlphaOfferService.AlphaStructure.Entities
{
    public class AlphaBankClient : IClient
    {
        public string Id { get; set; } = null!;

        public float Age { get; set; }

        public Gender Gender { get; set; }

        public float AverageSalary { get; set; }

        public bool IsSalaryKnown { get; set; }

        public float AverageRegionIncomePerCapita { get; set; }

        public float AverageCurrentCreditTurnover { get; set; }

        public bool IsNaTurnOtherCrAvgAct { get; set; }

        public float SupermarketTransactionCategoryPercent { get; set; }

        public float RestaurantTransactionCategoryPercent { get; set; }

        public float AverageMonthlyTravelCategoryTransactionAmountOverYear { get; set; }
    }
}
