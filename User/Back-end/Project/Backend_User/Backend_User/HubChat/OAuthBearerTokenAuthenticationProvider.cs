using Microsoft.Owin.Security.OAuth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace AspNetIdentity.WebApi.HubChat
{
    public class OAuthBearerTokenAuthenticationProvider : OAuthBearerAuthenticationProvider
    {
        public override Task RequestToken(OAuthRequestTokenContext context)
        {
            var tokenCookie = context.OwinContext.Request.Cookies["BearerToken"];

            if (!String.IsNullOrEmpty(tokenCookie))
                context.Token = tokenCookie;

            return Task.FromResult<object>(null);
        }
    }

}