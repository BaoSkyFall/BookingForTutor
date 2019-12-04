using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using AspNetIdentity.WebApi.Infrastructure;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace AspNetIdentity.WebApi.HubChat
{
   

    [HubName("chatcmnhub")]
    [Authorize]
    public class ChatHub : Hub
    {

        public override Task OnConnected()
        {
            //Viet code admin cho vo tat ca group
            string id = Context.User.Identity.GetUserId();

            ApplicationUser user = System.Web.HttpContext.Current.GetOwinContext().GetUserManager<ApplicationUserManager>().FindById(System.Web.HttpContext.Current.User.Identity.GetUserId());
            string role = user.Id;

            return base.OnConnected();
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            //Co the save DB

            return base.OnDisconnected(stopCalled);
        }

        public void Send(Message mes)
        {
            var id = Context.ConnectionId;
            Groups.Add(Context.ConnectionId, mes.userId);
            Clients.Group(mes.userId).addMessage(mes.message);
            
            
            //Clients.All.broadcastMessage("test", message)
            // Call the broadcastMessage method to update clients.
            Clients.Group(mes.userId).tinnhanbomaynhanduoc(mes);
        }

        
    }
}