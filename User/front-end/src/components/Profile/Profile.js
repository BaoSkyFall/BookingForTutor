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
      tags: [],
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
    userService.getUserbyUsername(decoded.unique_name).then(result => {
      console.log("result:", result);

      const blob = this.b64toBlob(result.Avatar, "image/png");
      const blobUrl = URL.createObjectURL(blob);
      result.Avatar = blobUrl;
      this.setState({ user: result });
      userService.getAllTags().then(result => {
        this.setState({ tags: result });
      });
    });
    //Bao
    //get user's profile
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
  toggleDialog = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  handleReadFileLoad = file => {
    const content = file.result;
    console.log("content:", content);
  };
  getBase64 = file => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      console.log(reader.result);
    };
    reader.onerror = function(error) {
      console.log("Error: ", error);
    };
  };
  handleAvatarChanged = event => {
    const image = event.target.files[0];
    const { user } = this.state;
    var vm = this;
    var input = event.target;
    var imgURL;
    var reader = new FileReader();
    reader.onload = function() {
      var dataURL = reader.result;
      dataURL = dataURL.substring(23, dataURL.length);
      userService.updateAvatar(user.UserName, dataURL).then(result => {
        console.log("result:", result);
        userService.getUserbyUsername(user.UserName).then(result => {
          console.log("result:", result);

          const blob = vm.b64toBlob(result.Avatar, "image/png");
          const blobUrl = URL.createObjectURL(blob);
          result.Avatar = blobUrl;
          vm.setState({ user: result });
        });
      });
    };

    reader.readAsDataURL(input.files[0]);
    // userService.updateAvatar(this.state.user.UserName, fileReader.result).then(result => {
    //   console.log('result:', result);
    // })

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
    console.log("user:", user);
    if (user.Skills) {
      user.Skills.forEach((element, index) => {
        const className = "skill-tag" + (index % 5);
        skillListContainer.push(
          <div key={index} className={className}>
            {" "}
            {element.Skill_Name}
            {element.Level_Name}
          </div>
        );
      });
      return <div className="skill-list-container">{skillListContainer}</div>;
    } else return null;
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
                      <img className="profile-image" src={user.Avatar}></img>
                      <input
                        type="file"
                        accept="image/*"
                        data-max-size="32154"
                        id="imageInput"
                        hidden
                        onChange={this.handleAvatarChanged}
                      ></input>
                      <button onClick={this.handleEditAvatarButtonClicked}>
                        <i className="fa fa-pen"></i>
                      </button>
                    </div>
                    <div className="profile-details">
                      <div>
                        <hr></hr>
                        <span className="name">{user.FullName}</span>
                      </div>
                      <div>
                        <hr></hr>

                        <span>{user.Description}</span>
                      </div>
                      <div>
                        <hr></hr>
                        <i className="fa fa-envelope"></i>
                        <span>{user.Email}</span>
                      </div>
                      <div>
                        <hr></hr>
                        <i className="fa fa-map-marker-alt"></i>

                        <span>{user.Adress}</span>
                      </div>
                      <div>
                        <hr></hr>
                        <i className="fa fa-phone"></i>

                        <span>{user.Phone}</span>
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
              tags={this.state.tags}
              saveProfileChanges={this.saveProfileChanges}
            ></EditDialog>
          </MDBContainer>
        </main>
      </div>
    );
  }
}
