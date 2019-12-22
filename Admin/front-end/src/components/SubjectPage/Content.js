import React, { Component } from "react";
import Swal from "sweetalert2";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectList: null,
      isAddModal: false,
      subjectName: "",
      errMessage: "*"
    };
  }

  componentDidMount() {
    //append table.js
    const script = document.createElement("script");
    script.src = "js/table.js";
    script.async = true;
    document.body.appendChild(script);
    //get data
    let dataList = [
      { name: "Math", isCore: true },
      { name: "Literature", isCore: true },
      { name: "Chemistry", isCore: true },
      { name: "Physics", isCore: true },
      { name: "Biology", isCore: true },
      { name: "English", isCore: true },
      { name: "French", isCore: false },
      { name: "Chinese", isCore: false }
    ];

    this.setState({ subjectList: dataList });
  }

  callModal = index => {
    //index of item
    if (index === -1)
      this.setState({
        isAddModal: true,
        subjectName: "",
        errMessage: "*"
      });
    else {
      const { subjectList } = this.state;
      this.setState({
        isAddModal: false,
        subjectName: subjectList[index].name,
        errMessage: "*"
      });
    }
  };

  //data field in modal changed
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  DeleteTagSkill = index => {
    Swal.fire({
      position: "top",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        //delete here

        //show message
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Delete skill-tag successfully",
          showConfirmButton: false,
          timer: 1000
        });
      }
    });
  };

  EditTagSkill = index => {
    const { subjectName } = this.state;
    if (subjectName === "") {
      this.setState({ errMessage: "Please input subject's name" });
      return;
    }
    //edit here

    //close modal
    let button = document.getElementById("closeAddTagBtn");
    button.click();

    //show message
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Edit subject successfully",
      showConfirmButton: false,
      timer: 1000
    });
  };

  AddNewTagList = () => {
    const { subjectName } = this.state;
    if (subjectName === "") {
      this.setState({ errMessage: "Please input subject's name" });
      return;
    }

    //add here

    //close modal
    let button = document.getElementById("closeAddTagBtn");
    button.click();

    //show message
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Add new subject successfully",
      showConfirmButton: false,
      timer: 1000
    });
  };

  renderDataList = () => {
    const buttonStyle = { float: "right", marginLeft: "10px" };

    let table = [];
    const { subjectList } = this.state;
    if (subjectList == null) return <tbody></tbody>;
    subjectList.forEach((element, index) => {
      table.push(
        <tr key={index}>
          <td>{element.name}</td>
          <td>
            {element.isCore ? "true" : "false"}
            <button
              type="button"
              className="btn btn-danger"
              style={buttonStyle}
              disabled={element.isCore}
              onClick={() => this.DeleteTagSkill(index)}
            >
              <i className="fa fa-trash"></i>
            </button>
            <button
              type="button"
              className="btn btn-primary"
              style={buttonStyle}
              data-toggle="modal"
              disabled={element.isCore}
              data-target="#modal-default"
              onClick={() => this.callModal(index)}
            >
              <i className="fa fa-pencil"></i>
            </button>
          </td>
        </tr>
      );
    });
    return <tbody>{table}</tbody>;
  };

  render() {
    const buttonStyle = { float: "right", marginRight: "5px" };
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <div className="box-header">
                <h3 className="box-title">Subject Table</h3>
                <button
                  type="button"
                  className="btn btn-success"
                  data-toggle="modal"
                  data-target="#modal-default"
                  style={buttonStyle}
                  onClick={() => this.callModal(-1)}
                >
                  <i className="fa fa-plus"></i>
                  <b> Add new subject</b>
                </button>
              </div>
              {/* /.box-header */}
              <div className="box-body">
                <table
                  id="data-table"
                  className="table table-bordered table-striped"
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Is Core</th>
                    </tr>
                  </thead>
                  {this.renderDataList()}
                  <tfoot>
                    <tr>
                      <th>Name</th>
                      <th>Is Core</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* modal add dialog */}
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
                <h4 className="modal-title">
                  {this.state.isAddModal ? "Add" : "Edit"} New Subject
                </h4>
              </div>
              <div className="modal-body">
                <form onSubmit={this.login}>
                  <p className="errMessage">{this.state.errMessage}</p>
                  <div className="form-group has-feedback">
                    <input
                      type="text"
                      name="subjectName"
                      className="form-control"
                      placeholder="Subject"
                      onChange={this.onChange}
                      value={this.state.subjectName}
                    />
                    <span className="fa fa-graduation-cap form-control-feedback" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  id="closeAddTagBtn"
                  className="btn btn-default pull-left"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={
                    this.state.isAddModal
                      ? this.AddNewTagList
                      : this.EditTagSkill
                  }
                >
                  {this.state.isAddModal ? "Add" : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
