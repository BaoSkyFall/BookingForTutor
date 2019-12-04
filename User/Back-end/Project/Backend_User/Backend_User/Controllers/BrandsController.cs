using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using AspNetIdentity.WebApi.Models;

namespace AspNetIdentity.WebApi.Controllers
{
    [Authorize(Roles = "Admin")]

    public class BrandsController : ApiController
    {
        private CarShopEntities db = new CarShopEntities();

        // GET: api/Brands
        public IQueryable<Brand> GetBrands()
        {
            return db.Brands;
        }

        // GET: api/Brands/5
        [ResponseType(typeof(Brand))]
        public async Task<IHttpActionResult> GetBrand(int id)
        {
            Brand brand = await db.Brands.FindAsync(id);
            if (brand == null)
            {
                return NotFound();
            }

            return Ok(brand);
        }

        // PUT: api/Brands/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutBrand(int id, Brand brand)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != brand.ID)
            {
                return BadRequest();
            }

            db.Entry(brand).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BrandExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            //return StatusCode(HttpStatusCode.NoContent);
            return Ok("Update Successfull!");

        }

        // POST: api/Brands
        [ResponseType(typeof(Brand))]
        public async Task<IHttpActionResult> PostBrand(Brand brand)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Brands.Add(brand);
            await db.SaveChangesAsync();

            //return CreatedAtRoute("DefaultApi", new { id = brand.ID }, brand);
            return Ok("Add Successfull!");
        }

        // DELETE: api/Brands/5
        [ResponseType(typeof(Brand))]
        public async Task<IHttpActionResult> DeleteBrand(int id)
        {
            Brand brand = await db.Brands.FindAsync(id);
            if (brand == null)
            {
                return NotFound();
            }

            db.Brands.Remove(brand);
            await db.SaveChangesAsync();

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

        private bool BrandExists(int id)
        {
            return db.Brands.Count(e => e.ID == id) > 0;
        }
    }
}