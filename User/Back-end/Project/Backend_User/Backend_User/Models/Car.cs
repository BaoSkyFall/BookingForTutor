//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    
    public partial class Car
    {
        public int ID { get; set; }
        public string Name_Car { get; set; }
        public Nullable<int> ID_Brand { get; set; }
        public Nullable<int> Price { get; set; }
        public byte[] img { get; set; }
    
        public virtual Brand Brand { get; set; }
    }
}
