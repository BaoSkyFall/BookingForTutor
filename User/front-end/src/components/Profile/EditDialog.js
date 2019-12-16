import React, { Component } from "react";
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
import MultiSelect from "@khanacademy/react-multi-select";

export default class EditDiaLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
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
              valueDefault={this.state.tempUser.firstName}
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
              valueDefault={this.state.tempUser.lastName}
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
              valueDefault={this.state.tempUser.email}
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
              valueDefault={this.state.tempUser.address}
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
              valueDefault={this.state.tempUser.number}
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
              valueDefault={this.state.tempUser.description}
            />
            <MultiSelect
              options={this.state.listOfSkills}
              selected={this.state.tempUser.skillList}
              onSelectedChanged={selected => this.handleSkillSelected(selected)}
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
