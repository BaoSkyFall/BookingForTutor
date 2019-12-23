import React, { Component } from "react";
import Swal from "sweetalert2";
import { userService } from "../../services/user.service";
import "./Profile.css";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: null,
      userInfo: {
        avatar: null,
        fullName: null,
        email: null,
        address: null,
        phone: null,
        joinDate: null,
        isTutor: null
      }
    };
  }

  componentDidMount() {
    userService.getAllUser().then(
      dataList => {
        this.setState({ userList: dataList });
        //append table.js
        const script = document.createElement("script");
        script.src = "js/table.js";
        script.async = true;
        document.body.appendChild(script);
      },
      error => {
        console.log(error);
      }
    );
  }

  BanOrUnban = isActive => {
    const title = isActive
      ? "Are you sure to ban this user?"
      : "Are you sure to unban this user?";
    Swal.fire({
      position: "top",
      title: title,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then(result => {
      if (result.value) {
        //ban or unban here

        //show message
        const successTitle = isActive
          ? "Ban user successfully"
          : "Unban user successfully";
        Swal.fire({
          position: "top",
          icon: "success",
          title: successTitle,
          showConfirmButton: false,
          timer: 1000
        });
      }
    });
  };

  b64toBlob = (b64Data, contentType = "", sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  };

  ShowMoreDetails = index => {
    const { userList } = this.state;
    let infomation = userList[index];
    let userInfo = {
      avatar: null,
      fullName: null,
      email: null,
      address: null,
      phone: null,
      joinDate: null,
      isTutor: null
    };
    if (infomation.Avatar !== null) {
      const blob = this.b64toBlob(infomation.Avatar, "image/png");
      const blobUrl = URL.createObjectURL(blob);
      userInfo.avatar = blobUrl;
    } else {
      userInfo.avatar =
        "https://crestedcranesolutions.com/wp-content/uploads/2013/07/facebook-profile-picture-no-pic-avatar.jpg";
    }
    userInfo.fullName =
      infomation.FullName !== null ? infomation.FullName : "Not update";
    userInfo.email =
      infomation.Email !== null ? infomation.Email : "Not update";
    userInfo.address =
      infomation.Adress !== null ? infomation.Adress : "Not update";
    userInfo.phone =
      infomation.Phone !== null ? infomation.Phone : "Not update";
    userInfo.joinDate = infomation.JoinDate.substring(0, 10);
    userInfo.isTutor = infomation.Roles[0] === "Tutor" ? true : false;
    this.setState({ userInfo: userInfo });
  };

  renderDataList = () => {
    const buttonStyle = { float: "right", marginLeft: "10px" };

    let table = [];
    let { userList } = this.state;
    if (userList === null) return <tbody></tbody>;
    userList.forEach((element, index) => {
      if (element.Roles[0] !== "Admin") {
        var banIconClass = element.isActive
          ? "fa fa-lock "
          : "fa fa-unlock-alt";
        var banBtnClass = element.isActive
          ? "btn btn-danger "
          : "btn btn-success";
        table.push(
          <tr key={index}>
            <td>{element.UserName}</td>
            <td>{element.Email !== null ? element.Email : "Not update"}</td>
            <td>{element.Phone !== null ? element.Phone : "Not update"}</td>
            <td>{element.Roles[0]}</td>
            <td>
              {element.isActive ? "true" : "false"}
              <button
                type="button"
                className={banBtnClass}
                style={buttonStyle}
                onClick={() => this.BanOrUnban(element.isActive)}
              >
                <i className={banIconClass}></i>
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#modal-default"
                style={buttonStyle}
                onClick={() => this.ShowMoreDetails(index)}
              >
                <i className="fa fa-eye"></i>
              </button>
            </td>
          </tr>
        );
      }
    });

    return <tbody>{table}</tbody>;
  };

  render() {
    const { userInfo } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <div className="box-header">
                <h3 className="box-title">Subject Table</h3>
              </div>
              {/* /.box-header */}
              <div className="box-body">
                <table
                  id="data-table"
                  className="table table-bordered table-striped"
                >
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Role</th>
                      <th>Is Active</th>
                    </tr>
                  </thead>
                  {this.renderDataList()}
                  <tfoot>
                    <tr>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Role</th>
                      <th>Is Active</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* modal detail dialog */}
        <div className="modal fade" id="modal-default">
          <div className="modal-dialog">
            <div className="modal-content" style={{ maxWidth: "500px" }}>
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
                <h4 className="modal-title">User infomation</h4>
              </div>
              <div className="modal-body">
                <div className="profile">
                  <div className="image-wrapper">
                    <img className="profile-image" src={userInfo.avatar}></img>
                  </div>
                  <div className="profile-details">
                    <div>
                      <hr></hr>
                      <span className="name">{userInfo.fullName}</span>
                    </div>
                    <div>
                      <hr></hr>
                      <i className="fa fa-envelope"></i>
                      <span>{userInfo.email}</span>
                    </div>
                    <div>
                      <hr></hr>
                      <i className="fa fa-map-marker"></i>
                      <span>{userInfo.address}</span>
                    </div>
                    <div>
                      <hr></hr>
                      <i className="fa fa-phone"></i>
                      <span>{userInfo.phone}</span>
                    </div>
                    <div>
                      <hr></hr>
                      <i className="fa fa-calendar"></i>
                      <span>{userInfo.joinDate}</span>
                    </div>
                    <div>
                      <hr></hr>
                      <i
                        className={
                          userInfo.isTutor
                            ? "fa fa-graduation-cap"
                            : "fa fa-user"
                        }
                      ></i>
                      <span>{userInfo.isTutor ? "Tutor" : "Student"}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  id="closeAddTagBtn"
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
