using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AspNetIdentity.WebApi.HubChat
{
    public class Message
    {
        public string userId { get; set; }
        public string message { get; set; }
    }
}