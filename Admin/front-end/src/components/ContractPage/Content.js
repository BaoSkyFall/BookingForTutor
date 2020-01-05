import React, { Component } from "react";
import Swal from "sweetalert2";
import { userService } from "../../services/user.service";

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

  BanOrUnban = isActive => {};

  ShowMoreDetails = index => {};

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
              <div className="modal-body">hohoho</div>
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
