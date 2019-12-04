using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;
using AspNetIdentity.WebApi.Infrastructure;
using AspNetIdentity.WebApi.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;

namespace AspNetIdentity.WebApi.Controllers
{
    [RoutePrefix("api/Discussions")]

    public class DiscussionsController : ApiController
    {
        private IdentityDatabaseEntities db = new IdentityDatabaseEntities();
      

        [Authorize(Roles = "Admin")]
        // GET: api/Discussions
        public IQueryable<Discussion> GetDiscussions()
        {
            return db.Discussions.OrderByDescending(p=> p.LastestUpdated);
        }
        [Authorize(Roles = "Admin")]

        // GET: api/Discussions/5
        [ResponseType(typeof(Discussion))]
        public IHttpActionResult GetDiscussion(int id)
        {
            var result =  db.Discussions.Find(id);
            if(result != null)
            {
                return Ok(db.Messages.Where(p=>p.DiscussionId == id));

            }
            else
            {
                return NotFound();
            }
            //if (discussion == null)
            //{
            //    return NotFound();
            //}
            //return Ok(discussion);
        }
        [Authorize]

        [Route("CurrentUser")]

        [ResponseType(typeof(Discussion))]
        public IHttpActionResult GetDiscussionCurrentUser()
        {
            ApplicationUser user = System.Web.HttpContext.Current.GetOwinContext().GetUserManager<ApplicationUserManager>().FindById(System.Web.HttpContext.Current.User.Identity.GetUserId());
            string id = user.Id;
            var result = db.Discussions.Where(p => p.OwnerId == id).ToList();
            if (result.Count >0 )
            {
                var id_discussion = result[0].Id;

                return Ok(db.Messages.Where(p => p.DiscussionId == id_discussion));
                //return Ok();
            }
            else
            {
                return NotFound();
            }
            return Ok();
            //if (discussion == null)
            //{
            //    return NotFound();
            //}
            //return Ok(discussion);
        }
        // PUT: api/Discussions/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutDiscussion(int id, Discussion discussion)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != discussion.Id)
            {
                return BadRequest();
            }

            db.Entry(discussion).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DiscussionExists(id))
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

        // POST: api/Discussions
        [ResponseType(typeof(Discussion))]
        public IHttpActionResult PostDiscussion(Discussion discussion)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Discussions.Add(discussion);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = discussion.Id }, discussion);
        }

        // DELETE: api/Discussions/5
        [ResponseType(typeof(Discussion))]
        public IHttpActionResult DeleteDiscussion(int id)
        {
            Discussion discussion = db.Discussions.Find(id);
            if (discussion == null)
            {
                return NotFound();
            }

            db.Discussions.Remove(discussion);
            db.SaveChanges();

            return Ok(discussion);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DiscussionExists(int id)
        {
            return db.Discussions.Count(e => e.Id == id) > 0;
        }
    }
}