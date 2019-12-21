import React, { Component } from "react";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillTagList: null
    };
  }

  componentDidMount() {
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

    //append table.js
    const script = document.createElement("script");
    script.src = "js/table.js";
    script.async = true;
    document.body.appendChild(script);
  }

  renderDataList = () => {
    let table = [];
    const { skillTagList } = this.state;
    if (skillTagList == null) return <tbody></tbody>;
    skillTagList.forEach((element, index) => {
      table.push(
        <tr>
          <td>{element.tag}</td>
          <td>{element.skill}</td>
        </tr>
      );
    });
    return <tbody>{table}</tbody>;
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <div className="box-header">
                <h3 className="box-title">Data Table With Full Features</h3>
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
                      <th>Skill</th>
                    </tr>
                  </thead>
                  {this.renderDataList()}
                  <tfoot>
                    <tr>
                      <th>Tag</th>
                      <th>Skill</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
              {/* /.box-body */}
            </div>
            {/* /.box */}
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
      </div>
    );
  }
}
