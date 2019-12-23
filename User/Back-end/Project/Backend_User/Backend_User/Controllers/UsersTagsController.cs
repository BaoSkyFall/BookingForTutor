using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AspNetIdentity.WebApi.Models;

namespace AspNetIdentity.WebApi.Controllers
{
    public class UsersTagsController : ApiController
    {
        private BookingTutorDatabaseEntities db = new BookingTutorDatabaseEntities();

        // GET: api/UsersTags
        public IQueryable<UsersTag> GetUsersTags()
        {
            var result = db.UsersTags.ToList();
            foreach(var data in result)
            {
                
            }
            return db.UsersTags;
        }

        // GET: api/UsersTags/5
        [ResponseType(typeof(UsersTag))]
        public IHttpActionResult GetUsersTag(int id)
        {
            UsersTag usersTag = db.UsersTags.Find(id);
            if (usersTag == null)
            {
                return NotFound();
            }

            return Ok(usersTag);
        }

        // PUT: api/UsersTags/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUsersTag(int id, UsersTag usersTag)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != usersTag.ID)
            {
                return BadRequest();
            }

            db.Entry(usersTag).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsersTagExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/UsersTags
        [ResponseType(typeof(UsersTag))]
        public IHttpActionResult PostUsersTag(UsersTag usersTag)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.UsersTags.Add(usersTag);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = usersTag.ID }, usersTag);
        }

        // DELETE: api/UsersTags/5
        [ResponseType(typeof(UsersTag))]
        public IHttpActionResult DeleteUsersTag(int id)
        {
            UsersTag usersTag = db.UsersTags.Find(id);
            if (usersTag == null)
            {
                return NotFound();
            }

            db.UsersTags.Remove(usersTag);
            db.SaveChanges();

            return Ok(usersTag);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UsersTagExists(int id)
        {
            return db.UsersTags.Count(e => e.ID == id) > 0;
        }
    }
}