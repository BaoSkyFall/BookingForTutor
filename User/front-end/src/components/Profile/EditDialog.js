import React, { Component } from "react";
import ReactTags from "react-tag-autocomplete";
import "react-tagsinput/react-tagsinput.css";
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
import "./Profile.css";

export default class EditDiaLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      tempUser: {
        firstName: "",
        lastName: "",
        role: "",
        avatarUrl: "",
        email: "",
        address: "",
        number: "",
        description: "",
        skillList: []
      },
      listOfSkills: [
        {
          label: "skill thu 1",
          value: "skill thu 1"
        },
        {
          label: "skill thu 2",
          value: "skill thu 2"
        },
        {
          label: "skill thu 3",
          value: "skill thu 3"
        }
      ],
      errMessage: "*"
    };
  }

  componentDidMount = () => {
    const { user } = this.props;
    this.setState({
      tempUser: user
    });

    //Bao
    //get list of skills
  };

  onEditProfileChangeValue = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      tempUser: { ...prevState.tempUser, [name]: value }
    }));
  };

  handleSkillSelected = selected => {
    this.setState(prevState => ({
      tempUser: { ...prevState.tempUser, skillList: selected }
    }));
  };

  saveProfileChanges = () => {
    const { tempUser } = this.state;
    //check valid value
    if (tempUser.firstName === "")
      this.setState({ errMessage: "Please input First name" });
    else if (tempUser.lastName === "")
      this.setState({ errMessage: "Please input Last name" });
    else if (tempUser.email === "")
      this.setState({ errMessage: "Please input Email" });
    else if (tempUser.address === "")
      this.setState({ errMessage: "Please input Address" });
    else if (tempUser.number === "")
      this.setState({ errMessage: "Please input Phone number" });
    else if (tempUser.description === "")
      this.setState({ errMessage: "Please input Description" });
    else {
      //check valid email
      const email = tempUser.email;
      let lastAtPos = email.lastIndexOf("@");
      let lastDotPos = email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          email.indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          email.length - lastDotPos > 2
        )
      ) {
        this.setState({ errMessage: "Email is invalid" });
        return;
      }
      //valid data
      this.props.saveProfileChanges(tempUser);
    }
    //Bao
    //call api
  };

  closeDialog = () => {
    this.props.closeDialog();
  };
  handleDelete(i) {
    var temp = this.state.tempUser;
    const tags = temp.Skills.slice(0);
    tags.splice(i, 1);
    temp.Skills = tags;
    this.setState({ tempUser: temp });
  }

  handleAddition(tag) {
    var temp = this.state.tempUser;

    const tags = [].concat(temp.Skills, tag);
    temp.Skills = tags;
    this.setState({ tempUser: temp });
  }
  render() {
    const { user, tags } = this.props;

    console.log("user:", user);
    console.log("tags:", tags);

    return (
      <MDBContainer className="text-center profile" id="container">
        <MDBModal isOpen={this.props.modal} toggle={this.closeDialog}>
          <MDBModalHeader toggle={this.closeDialog}>
            Edit profile
          </MDBModalHeader>
          <MDBModalBody>
            <p className="errMessage">{this.state.errMessage}</p>
            <MDBInput
              label="First name"
              name="firstName"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              onChange={this.onEditProfileChangeValue}
              valueDefault={user.FirstName}
            />
            <MDBInput
              label="Last name"
              name="lastName"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              onChange={this.onEditProfileChangeValue}
              valueDefault={user.LastName}
            />
            <MDBInput
              label="Email"
              name="email"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              onChange={this.onEditProfileChangeValue}
              valueDefault={user.Email}
            />
            <MDBInput
              label="Address"
              name="address"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              onChange={this.onEditProfileChangeValue}
              valueDefault={user.Adress}
            />
            <MDBInput
              label="Phone number"
              name="number"
              group
              type="number"
              validate
              error="wrong"
              success="right"
              onChange={this.onEditProfileChangeValue}
              valueDefault={user.Phone}
            />
            <MDBInput
              label="Description"
              name="description"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              onChange={this.onEditProfileChangeValue}
              valueDefault={user.Description}
            />
            {/* <MultiSelect
              options={this.state.listOfSkills}
              selected={this.state.tempUser.skillList}
              onSelectedChanged={selected => this.handleSkillSelected(selected)}
            /> */}
            <ReactTags
              tags={this.state.tempUser.Skills}
              suggestions={tags}
              handleDelete={this.handleDelete.bind(this)}
              handleAddition={this.handleAddition.bind(this)}
            />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.closeDialog}>
              Close
            </MDBBtn>
            <MDBBtn color="primary" onClick={this.saveProfileChanges}>
              Save changes
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}
