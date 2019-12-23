import React, { Component } from "react";
import Swal from "sweetalert2";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillTagList: null,
      isAddModal: false,
      skillName: "",
      skillTag: "",
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
      { tag: "#EnglishGrade1", skill: "English grade 1" },
      { tag: "#EnglishGrade2", skill: "English grade 2" },
      { tag: "#EnglishGrade3", skill: "English grade 3" },
      { tag: "#EnglishGrade4", skill: "English grade 4" },
      { tag: "#EnglishGrade5", skill: "English grade 5" },
      { tag: "#EnglishGrade6", skill: "English grade 6" },
      { tag: "#EnglishGrade7", skill: "English grade 7" },
      { tag: "#EnglishGrade8", skill: "English grade 8" },

      { tag: "#MathGrade1", skill: "Math grade 1" },
      { tag: "#MathGrade2", skill: "Math grade 2" },
      { tag: "#MathGrade3", skill: "Math grade 3" },
      { tag: "#MathGrade4", skill: "Math grade 4" },
      { tag: "#MathGrade5", skill: "Math grade 5" },
      { tag: "#MathGrade6", skill: "Math grade 6" },
      { tag: "#MathGrade7", skill: "Math grade 7" },
      { tag: "#MathGrade8", skill: "Math grade 8" },

      { tag: "#PhysicsGrade1", skill: "Physics grade 1" },
      { tag: "#PhysicsGrade2", skill: "Physics grade 2" },
      { tag: "#PhysicsGrade3", skill: "Physics grade 3" },
      { tag: "#PhysicsGrade4", skill: "Physics grade 4" },
      { tag: "#PhysicsGrade5", skill: "Physics grade 5" },
      { tag: "#PhysicsGrade6", skill: "Physics grade 6" },
      { tag: "#PhysicsGrade7", skill: "Physics grade 7" },
      { tag: "#PhysicsGrade8", skill: "Physics grade 8" },

      { tag: "#ChemistryGrade1", skill: "Chemistry grade 1" },
      { tag: "#ChemistryGrade2", skill: "Chemistry grade 2" },
      { tag: "#ChemistryGrade3", skill: "Chemistry grade 3" },
      { tag: "#ChemistryGrade4", skill: "Chemistry grade 4" },
      { tag: "#ChemistryGrade5", skill: "Chemistry grade 5" },
      { tag: "#ChemistryGrade6", skill: "Chemistry grade 6" },
      { tag: "#ChemistryGrade7", skill: "Chemistry grade 7" },
      { tag: "#ChemistryGrade8", skill: "Chemistry grade 8" }
    ];

    this.setState({ skillTagList: dataList });
  }

  callModal = index => {
    //index of item
    if (index === -1)
      this.setState({
        isAddModal: true,
        skillTag: "",
        skillName: "",
        errMessage: "*"
      });
    else {
      const { skillTagList } = this.state;
      this.setState({
        isAddModal: false,
        skillTag: skillTagList[index].tag,
        skillName: skillTagList[index].skill,
        errMessage: "*"
      });
    }
  };

  //data field in modal changed
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.changeSkillTag(e.target.value);
  };

  changeSkillTag = skillName => {
    let skillTag = skillName
      .replace(/\w+/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1);
      })
      .replace(/\s/g, "");
    skillTag !== "" ? (skillTag = "#" + skillTag) : (skillTag = "");
    this.setState({ skillTag: skillTag });
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
    const { skillName } = this.state;
    if (skillName === "") {
      this.setState({ errMessage: "Please input skill's name" });
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
      title: "Edit skill-tag successfully",
      showConfirmButton: false,
      timer: 1000
    });
  };

  AddNewTagList = () => {
    const { skillName } = this.state;
    if (skillName === "") {
      this.setState({ errMessage: "Please input skill's name" });
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
      title: "Add new skill-tag successfully",
      showConfirmButton: false,
      timer: 1000
    });
  };

  renderDataList = () => {
    const buttonStyle = { float: "right", marginLeft: "10px" };

    let table = [];
    const { skillTagList } = this.state;
    if (skillTagList == null) return <tbody></tbody>;
    skillTagList.forEach((element, index) => {
      table.push(
        <tr key={index}>
          <td>{element.tag}</td>
          <td>
            {element.skill}
            <button
              type="button"
              className="btn btn-danger"
              style={buttonStyle}
              onClick={() => this.DeleteTagSkill(index)}
            >
              <i className="fa fa-trash"></i>
            </button>
            <button
              type="button"
              className="btn btn-primary"
              style={buttonStyle}
              data-toggle="modal"
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
                <h3 className="box-title">Skill Tag Table</h3>
                <button
                  type="button"
                  className="btn btn-success"
                  data-toggle="modal"
                  data-target="#modal-default"
                  style={buttonStyle}
                  onClick={() => this.callModal(-1)}
                >
                  <i className="fa fa-plus"></i>
                  <b> Add new skill-tag</b>
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
                      <th>Tag</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  {this.renderDataList()}
                  <tfoot>
                    <tr>
                      <th>Tag</th>
                      <th>Name</th>
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
                  {this.state.isAddModal ? "Add" : "Edit"} New Skill Tag
                </h4>
              </div>
              <div className="modal-body">
                <form>
                  <p className="errMessage">{this.state.errMessage}</p>
                  <div className="form-group has-feedback">
                    <input
                      type="text"
                      name="skillName"
                      className="form-control"
                      placeholder="SkillName"
                      onChange={this.onChange}
                      value={this.state.skillName}
                    />
                    <span className="fa fa-tachometer form-control-feedback" />
                  </div>
                  <div className="form-group has-feedback">
                    <input
                      type="text"
                      name="skillTag"
                      className="form-control"
                      placeholder="SkillTag"
                      onChange={this.onChange}
                      disabled
                      value={this.state.skillTag}
                    />
                    <span className="fa fa-tag form-control-feedback" />
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
                  {this.state.isAddModal ? "Add" : "Edit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
