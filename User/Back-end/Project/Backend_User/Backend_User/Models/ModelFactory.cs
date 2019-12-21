using AspNetIdentity.WebApi.Infrastructure;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http.Routing;

namespace AspNetIdentity.WebApi.Models
{
    public class ModelFactory
    {

        private UrlHelper _UrlHelper;
        private ApplicationUserManager _AppUserManager;
        private IdentityDatabaseEntities1 _db;
        public ModelFactory(HttpRequestMessage request, ApplicationUserManager appUserManager)
        {
            _UrlHelper = new UrlHelper(request);
            _AppUserManager = appUserManager;
            _db = new IdentityDatabaseEntities1();
        }

        public UserReturnModel Create(ApplicationUser appUser)
        {
            return new UserReturnModel
            {
                Url = _UrlHelper.Link("GetUserById", new { id = appUser.Id }),
                Id = appUser.Id,
                UserName = appUser.UserName,
                FirstName = appUser.FirstName,
                LastName = appUser.LastName,
                FullName = string.Format("{0} {1}", appUser.FirstName, appUser.LastName),
                Email = appUser.Email,
                EmailConfirmed = appUser.EmailConfirmed,
                Level = appUser.Level,
                JoinDate = appUser.JoinDate,
                Description = appUser.Description,
                Adress = appUser.Adress,
                Phone = appUser.Phone,
                Avatar = appUser.Avatar,
                Roles = _AppUserManager.GetRolesAsync(appUser.Id).Result,
                isAdmin = appUser.isAdmin,
                isActive = appUser.isActive,
                Claims = _AppUserManager.GetClaimsAsync(appUser.Id).Result,
                Skills = _db.selectSkillsAndLevels(appUser.UserName).ToList(),
            };

        }

        public RoleReturnModel Create(IdentityRole appRole) {

            return new RoleReturnModel
           {
               Url = _UrlHelper.Link("GetRoleById", new { id = appRole.Id }),
               Id = appRole.Id,
               Name = appRole.Name
           };

        }
    }

    public class UserReturnModel
    {

        public string Url { get; set; }
        public string Id { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public Boolean isAdmin { get; set; }
        public Boolean isActive { get; set; }
        public byte[] Avatar { get; set; }
        public string Description { get;set;}
        public string Adress { get; set; }
        public string Phone { get; set; }
        public bool EmailConfirmed { get; set; }
        public int Level { get; set; }
        public DateTime JoinDate { get; set; }
        public IList<string> Roles { get; set; }
        public List<selectSkillsAndLevels_Result> Skills { get; set; }

        public IList<System.Security.Claims.Claim> Claims { get; set; }

    }

    public class RoleReturnModel
    {
        public string Url { get; set; }
        public string Id { get; set; }
        public string Name { get; set; }
    }
}