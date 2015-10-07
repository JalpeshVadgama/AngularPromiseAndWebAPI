using AngularJSPromise.Models;
using System.Collections.Generic;
using System.Web.Http;

namespace AngularJSPromise.Controllers
{
    public class EmployeesController : ApiController
    {
        private readonly List<Employee> _employees;

        public EmployeesController()
        {
            _employees = new List<Employee>()
            {
                new Employee {Id = 1, FirstName = "Jalpesh", LastName = "Vadgama"},
                new Employee{Id=2, FirstName = "Vishal",LastName = "Vadgama"}
            };
        }

        public IEnumerable<Employee> GetAllProducts()
        {
            return _employees;
        }
    }
}
