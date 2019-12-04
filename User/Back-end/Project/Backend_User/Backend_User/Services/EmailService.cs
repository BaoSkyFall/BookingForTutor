using Microsoft.AspNet.Identity;
using SendGrid;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web;
using System.Windows;

namespace AspNetIdentity.WebApi.Services
{
    public class EmailService : IIdentityMessageService
    {
        public async Task SendAsync(IdentityMessage message)
        {
            await configSendGridasync(message);
        }

        // Use NuGet to install SendGrid (Basic C# client lib) 
        private async Task configSendGridasync(IdentityMessage message)
        {

            //var myMessage = new SendGridMessage();

            //myMessage.AddTo(message.Destination);
            //myMessage.From = new System.Net.Mail.MailAddress("baoit128@gmail.com", "Quoc Bao");
            //myMessage.Subject = message.Subject;
            //myMessage.Text = message.Body;
            //myMessage.Html = message.Body;

            //var credentials = new NetworkCredential(ConfigurationManager.AppSettings["emailService:Account"], 
            //                                        ConfigurationManager.AppSettings["emailService:Password"]);

            //// Create a Web transport for sending email.
            //var transportWeb = new Web(credentials);

            //// Send the email.
            //if (transportWeb != null)
            //{
            //    await transportWeb.DeliverAsync(myMessage);
            //}
            //else
            //{
            //    //Trace.TraceError("Failed to create Web transport.");
            //    await Task.FromResult(0);
            //}
            try
            {
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient();
                mail.To.Add(message.Destination);
                mail.Subject = message.Subject;
                mail.Body = message.Body;
                SmtpServer.Send(mail);
                //MessageBox.Show("mail Send");
            }
            catch (Exception ex)
            {
                //MessageBox.Show(ex.ToString());
            }
        }
    }
}