using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AspNetIdentity.WebApi.Models;
using System.Threading.Tasks;

namespace AspNetIdentity.WebApi.Controllers
{
    [Authorize(Roles = "Admin")]
    [RoutePrefix("api/cars")]
    public class CarsController : ApiController
    {
        private CarShopEntities db = new CarShopEntities();

        // GET: api/Cars?brand_id=1&pageIndex=2&pageSize=5
  

        public CarsResult GetCars(int? brand_id = null, int? pageIndex = 0, int? pageSize = 5)
        {
            CarsResult rs = new CarsResult();
            var result = db.Cars.AsQueryable();

            if (brand_id.HasValue)
            {
                result = result.Where(c => c.ID_Brand == brand_id);
            }

            rs.count = result.Count();
            rs.result = result.OrderBy(p => p.ID).Skip(pageIndex.Value * pageSize.Value).Take(pageSize.Value);
            return rs;
        }
        [Route("CarsbyBrand/{id}")]
        // GET: api/CarsbyBrand/5
        public IQueryable<Car> GetCarsbyBrand(int id)
        {

            return db.Cars.Where(p => p.ID_Brand == id);
        }
        //[Route("/Page/{pageIndex}/{pageSize}")]
        //GET: api/Cars/1/page/2/3
        //public CarsResult GetCarsbyPage(int? brand_id)
        //{
        //    CarsResult rs = new CarsResult();

        //    if (brand_id.HasValue)
        //    {
        //        rs.count = db.Cars.Count(c => c.ID_Brand == brand_id);
        //        rs.result = db.Cars.Where(p => p.ID_Brand == brand_id); ;
        //        return rs;
        //    }
        //    rs.count = db.Cars.Count();
        //    rs.result = db.Cars.OrderBy(p => p.ID).Skip(pageIndex * pageSize).Take(pageSize);
        //    return rs;
        //}
        //public IQueryable<Car> GetCarsbyPage(int pageIndex, int pageSize)
        //{

        //    return db.Cars.OrderBy(p => p.ID).Skip(pageIndex * pageSize).Take(pageSize);
        //}
        // GET: api/Cars/5
        [ResponseType(typeof(Car))]
        public async Task<IHttpActionResult> GetCar(int id)
        {
            Car car = await db.Cars.FindAsync(id);
            if (car == null)
            {
                return NotFound();
            }

            return Ok(car);
        }

        // PUT: api/Cars/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutCar(int id, Car car)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                if (id != car.ID)
                {
                    return BadRequest();
                }
                db.Entry(car).State = EntityState.Modified;

                if (car.img == null || car.img.Length == 0)
                {
                    db.Entry(car).Property(x => x.img).IsModified = false;

                }


                try
                {
                    await db.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CarExists(id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }


                //return StatusCode(HttpStatusCode.NoContent);
                //return Json(car);
                return Ok("Update Successfull!");
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }

        // POST: api/Cars
        [ResponseType(typeof(Car))]
        public async Task<IHttpActionResult> PostCar(Car car)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            db.Cars.Add(car);
            await db.SaveChangesAsync();

            //return CreatedAtRoute("DefaultApi", new { id = car.ID }, car);
            return Ok("Add Successfull!");

        }

        // DELETE: api/Cars/5
        [ResponseType(typeof(Car))]
        public async Task<IHttpActionResult> DeleteCar(int id)
        {
            Car car = await db.Cars.FindAsync(id);
            if (car == null)
            {
                return NotFound();
            }

            db.Cars.Remove(car);
            await db.SaveChangesAsync();

            //return Ok("Delete Success Full ID:" + id);
            return Ok("Delete Successfull");

        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CarExists(int id)
        {
            return db.Cars.Count(e => e.ID == id) > 0;
        }
    }
}