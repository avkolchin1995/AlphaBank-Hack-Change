namespace AlphaOfferService.AlphaStructure.Employee
{
    public interface IEmployeeRepository
    {
        public Task<IEmployee?> GetEmployeeByIdAsync(string employeeId);
    }
}
