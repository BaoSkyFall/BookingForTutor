import React, { Component } from "react";
import Swal from "sweetalert2";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillTagList: null
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
      { tag: "#English1", skill: "English grade 1" },
      { tag: "#English2", skill: "English grade 2" },
      { tag: "#English3", skill: "English grade 3" },
      { tag: "#English4", skill: "English grade 4" },
      { tag: "#English5", skill: "English grade 5" },
      { tag: "#English6", skill: "English grade 6" },
      { tag: "#English7", skill: "English grade 7" },
      { tag: "#English8", skill: "English grade 8" },

      { tag: "#Math1", skill: "Math grade 1" },
      { tag: "#Math2", skill: "Math grade 2" },
      { tag: "#Math3", skill: "Math grade 3" },
      { tag: "#Math4", skill: "Math grade 4" },
      { tag: "#Math5", skill: "Math grade 5" },
      { tag: "#Math6", skill: "Math grade 6" },
      { tag: "#Math7", skill: "Math grade 7" },
      { tag: "#Math8", skill: "Math grade 8" },

      { tag: "#Physics1", skill: "Physics grade 1" },
      { tag: "#Physics2", skill: "Physics grade 2" },
      { tag: "#Physics3", skill: "Physics grade 3" },
      { tag: "#Physics4", skill: "Physics grade 4" },
      { tag: "#Physics5", skill: "Physics grade 5" },
      { tag: "#Physics6", skill: "Physics grade 6" },
      { tag: "#Physics7", skill: "Physics grade 7" },
      { tag: "#Physics8", skill: "Physics grade 8" },

      { tag: "#Chemistry1", skill: "Chemistry grade 1" },
      { tag: "#Chemistry2", skill: "Chemistry grade 2" },
      { tag: "#Chemistry3", skill: "Chemistry grade 3" },
      { tag: "#Chemistry4", skill: "Chemistry grade 4" },
      { tag: "#Chemistry5", skill: "Chemistry grade 5" },
      { tag: "#Chemistry6", skill: "Chemistry grade 6" },
      { tag: "#Chemistry7", skill: "Chemistry grade 7" },
      { tag: "#Chemistry8", skill: "Chemistry grade 8" }
    ];

    this.setState({ skillTagList: dataList });
  }

  DeleteTagSkill = index => {};

  EditTagSkill = index => {
    console.log("edit " + index);
  };

  AddNewTagList = () => {
    console.log("add");
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
              onClick={() => this.EditTagSkill(index)}
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
                  onClick={this.AddNewTagList}
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
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
                <h4 className="modal-title">Add New Skill Tag</h4>
              </div>
              <div className="modal-body">
                <p>One fine body…</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default pull-left"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
