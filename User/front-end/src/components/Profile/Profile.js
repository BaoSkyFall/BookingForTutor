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
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter
} from "mdbreact";
import { history } from "../../helpers/history";
import "./Profile.css";
import JWT from "jwt-decode";
import MyNavBar from "../MyNavBar/MyNavBar";
import EditDialog from "./EditDialog";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      userInToken: {
        nameId: "",
        role: ""
      },
      user: {
        firstName: "phan",
        lastName: "binh",
        role: "Tutor",
        avatarUrl:
          "https://www.viadelvino.com/wp-content/uploads/2016/02/photo.jpg.png",
        email: "123456@gmail.com",
        address: "124 duong so 1A",
        number: "01345678",
        description:
          "Toi la 1 giao vien gioi, Toi la 1 giao vien gioi, Toi la 1 giao vien gioi, Toi la 1 giao vien gioi",
        skillList: ["skill thu 1"]
      }
    };
  }

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    var decoded = JWT(token);
    this.setState({
      userInToken: { nameId: decoded.unique_name, role: decoded.role }
    });

    //Bao
    //get user's profile
  };

  toggleDialog = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleAvatarChanged = event => {
    const image = event.target.files[0];
    const fd = new FormData();
    fd.append("image", image, image.name);
    //Bao
    //up hình, lưu luôn
  };

  handleEditAvatarButtonClicked = () => {
    const imgInput = document.getElementById("imageInput");
    imgInput.click();
  };

  saveProfileChanges = res => {
    this.setState({
      modal: !this.state.modal,
      user: res
    });
    //Bao
    //call api
  };

  renderSkillListContainer = () => {
    let skillListContainer = [];
    const { user } = this.state;
    user.skillList.forEach((element, index) => {
      const className = "skill-tag" + (index % 5);
      skillListContainer.push(
        <div key={index} className={className}>
          {" "}
          {element}{" "}
        </div>
      );
    });
    return <div className="skill-list-container">{skillListContainer}</div>;
  };
  render() {
    const { userInToken, user } = this.state;
    let header = "";
    if (userInToken.role === "Tutor") {
      header = (
        <div>
          <h2>This is Tutor profile page</h2>
          <h5>Hello {userInToken.nameId}</h5>
        </div>
      );
    } else
      header = (
        <div>
          <h2>This is student profile page</h2>
          <h5>Hello {userInToken.nameId}</h5>
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
                      <input
                        type="file"
                        accept="image/*"
                        data-max-size="32154"
                        id="imageInput"
                        hidden
                        onChange={this.handleAvatarChanged}
                      ></input>
                      <button onClick={this.handleEditAvatarButtonClicked}>
                        <i className="fas fa-pen"></i>
                      </button>
                    </div>
                    <div className="profile-details">
                      <div>
                        <hr></hr>
                        <span className="name">
                          {user.lastName}, {user.firstName}
                        </span>
                      </div>
                      <div>
                        <hr></hr>
                        <span>{user.description}</span>
                      </div>
                      <div>
                        <hr></hr>
                        <i className="fas fa-envelope"></i>
                        <span>{user.email}</span>
                      </div>
                      <div>
                        <hr></hr>
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{user.address}</span>
                      </div>
                      <div>
                        <hr></hr>
                        <i className="fas fa-phone"></i>
                        <span>{user.number}</span>
                      </div>

                      <div>{this.renderSkillListContainer()}</div>
                    </div>
                    <MDBBtn color="primary" onClick={this.toggleDialog}>
                      Edit
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>

            <EditDialog
              user={this.state.user}
              closeDialog={this.toggleDialog}
              modal={this.state.modal}
              saveProfileChanges={this.saveProfileChanges}
            ></EditDialog>
          </MDBContainer>
        </main>
      </div>
    );
  }
}
