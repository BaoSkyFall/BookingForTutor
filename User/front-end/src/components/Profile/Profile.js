import React, { Component } from "react";
import { userService } from "../../services/user.service";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBModalFooter
} from "mdbreact";
import { history } from "../../helpers/history";
import "./Profile.css";
import JWT from "jwt-decode";
import MyNavBar from "../MyNavBar/MyNavBar";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInTokem: {
        nameId: "",
        role: ""
      },
      user: {
        firstName: "phan",
        lastName: "binh",
        avatarUrl:
          "https://www.viadelvino.com/wp-content/uploads/2016/02/photo.jpg.png",
        email: "123456@gmail.com",
        address: "124 duong so 1A",
        description:
          "Toi la 1 giao vien gioi, Toi la 1 giao vien gioi, Toi la 1 giao vien gioi, Toi la 1 giao vien gioi",
        skillList: ["skill thu 1", "skill thu 2", "skill thu 3", "skill thu 4"]
      }
    };
  }

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    var decoded = JWT(token);
    //TO DO
    this.setState({
      userInTokem: { nameId: decoded.unique_name, role: decoded.role }
    });
  };

  renderSkillListContainer = () => {
    let skillListContainer = [];
    const { user } = this.state;
    user.skillList.forEach(element => {
      skillListContainer.push(<div className="skill-tag"> {element} </div>);
    });
    return <div className="skill-list-container">{skillListContainer}</div>;
  };
  render() {
    console.log(this.state);
    const { userInTokem, user } = this.state;
    let header = "";
    if (userInTokem.role === "Tutor") {
      header = (
        <div>
          <h2>This is Tutor profile page</h2>
          <h5>Hello {userInTokem.nameId}</h5>
        </div>
      );
    } else
      header = (
        <div>
          <h2>This is student profile page</h2>
          <h5>Hello {userInTokem.nameId}</h5>
        </div>
      );
    return (
      // <div>
      //   Home
      //   <button variant="warning" text="light" onClick={() => this.logout()}>
      //     Logout
      //   </button>
      // </div>
      <div>
        <MyNavBar active="Profile" header={header}></MyNavBar>

        <main>
          <MDBContainer className="text-center profile" id="container">
            <MDBRow>
              <MDBCol md="5" id="inner">
                <MDBCard className="myCard">
                  <MDBCardBody className="mx-4">
                    <div className="text-center">
                      <h3 className="dark-grey-text mb-5">
                        <strong>Profile</strong>
                      </h3>
                    </div>
                    <div className="image-wrapper">
                      <img className="profile-image" src={user.avatarUrl}></img>
                    </div>
                    <div className="profile-details">
                      <hr></hr>
                      <span className="name">
                        {user.lastName}, {user.firstName}
                      </span>
                      <hr></hr>
                      <span>{user.description}</span>
                      <hr></hr>
                      <i className="fas fa-envelope"></i>
                      <span>{user.email}</span>
                      <hr></hr>
                      <i className="fas fa-map-marker-alt"></i>
                      <span>{user.address}</span>
                      <div>{this.renderSkillListContainer()}</div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </main>
      </div>
    );
  }
}
