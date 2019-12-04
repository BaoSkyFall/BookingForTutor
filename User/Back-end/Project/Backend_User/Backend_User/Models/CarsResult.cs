using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AspNetIdentity.WebApi.Models
{
    public class CarsResult
    {
        public int count { get; set; }
        public IQueryable<Car> result { get; set; }
    }
}