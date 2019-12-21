﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AspNetIdentity.WebApi.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class IdentityDatabaseEntities1 : DbContext
    {
        public IdentityDatabaseEntities1()
            : base("name=IdentityDatabaseEntities1")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<AspNetUser> AspNetUsers { get; set; }
        public virtual DbSet<Level> Levels { get; set; }
        public virtual DbSet<UsersSkillsLevel> UsersSkillsLevels { get; set; }
    
        public virtual ObjectResult<selectUserSkillsLevels_Result> selectUserSkillsLevels(string username)
        {
            var usernameParameter = username != null ?
                new ObjectParameter("username", username) :
                new ObjectParameter("username", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<selectUserSkillsLevels_Result>("selectUserSkillsLevels", usernameParameter);
        }
    
        public virtual ObjectResult<selectSkillsAndLevels_Result> selectSkillsAndLevels(string username)
        {
            var usernameParameter = username != null ?
                new ObjectParameter("username", username) :
                new ObjectParameter("username", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<selectSkillsAndLevels_Result>("selectSkillsAndLevels", usernameParameter);
        }
    
        public virtual ObjectResult<string> selectAllTags()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<string>("selectAllTags");
        }
    
        public virtual ObjectResult<selectAllTagsAll_Result> selectAllTagsAll()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<selectAllTagsAll_Result>("selectAllTagsAll");
        }
    }
}