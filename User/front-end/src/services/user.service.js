//import { authHeader } from "../Helpers";

const apiUrl = "http://bookingtutor.somee.com/";

export const userService = {
  login,
  logout,
  register,
  getUserbyUsername
  //getById,
  //update,
  //delete: _delete
};

function login(name, password) {
  let value = "grant_type=password&username=" + name + "&password=" + password;
  console.log("value:", value);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: value
  };

  return fetch(`${apiUrl}/oauth/token`, requestOptions)
    .then(handleResponse)
    .then(response => {
      console.log("response:", response);
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("token", JSON.stringify(response.access_token));

      return response;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("token");
}

// function getById(id) {
//   const requestOptions = {
//     method: "GET",
//     headers: authHeader()
//   };

//   return fetch(`${apiUrl}/user/${id}`, requestOptions).then(handleResponse);
// }

function register(user) {
  console.log(user);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  };

  return fetch(`${apiUrl}/api/accounts/create`, requestOptions).then(
    handleResponse
  );
}
// function update(user) {
//   const requestOptions = {
//     method: "PUT",
//     headers: { ...authHeader(), "Content-Type": "application/json" },
//     body: JSON.stringify(user)
//   };

//   return fetch(`${apiUrl}/user/${user.id}`, requestOptions).then(
//     handleResponse
//   );
// }

// // prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//   const requestOptions = {
//     method: "DELETE",
//     headers: authHeader()
//   };

//   return fetch(`${apiUrl}/user/${id}`, requestOptions).then(handleResponse);
// }
function getUserbyUsername(username) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };
  return fetch(`${apiUrl}/api/accounts/user/${username}`, requestOptions).then(
    handleResponse
  );
}
function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        window.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
