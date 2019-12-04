import React, { Component } from 'react';
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
import "../Register/Register.css";
import { userService } from "../../services/user.service";
import { history } from "../../helpers/history";
import { NavLink } from "react-router-dom";
class SocialLoginConfirmRole extends Component {
    constructor(props) {
        super(props);
        this.state = {

            isTutor: null,
            message: '',
        };

    }
    onOptChanged = e => {
        if (e.target.value === "true") this.setState({ isTutor: true });
        else if (e.target.value === "false") this.setState({ isTutor: false });
    };
    register = e => {
        e.preventDefault();

        this.setState({ isSubmitted: true });
        if (this.state.isTutor === null)
            this.setState({ message: "Please choose your role" });
        else {
            let user = JSON.parse(localStorage.getItem('userFB'));

            user.Role = this.state.isTutor
            userService
                .register(user)
                .then(
                    data => {
                        if (data.user === null) {
                            this.setState({ message: "This name is existed" });
                            history.push("/");
                        } else {
                            userService.login(user.UserName, "123456Abc*").then(res => {
                                history.push('/');

                            }, err => {
                                history.push('/');

                            })
                        }
                    },
                    error => {
                        console.log('error:', error);
                        this.setState({ message: "Registration failed" });
                    }
                );
        }


    }

    render() {
        return (
            <div>
                <MDBContainer id="container">
                    <p id="banner">Welcome to DoubleB</p>
                    <MDBRow>
                        <MDBCol md="6" id="inner">
                            <MDBCard className="myCard">
                                <MDBCardBody className="mx-4">
                                    <div className="text-center">
                                        <h3 className="dark-grey-text mb-5">
                                            <strong>This is your first time login by Social Network <br></br> Please choose Role to Login</strong>
                                        </h3>
                                    </div>
                                    <div id="optRole">
                                        <select
                                            className="browser-default custom-select"
                                            onChange={this.onOptChanged}
                                        >
                                            <option>Choose your role</option>
                                            <option value={true}>Tutor</option>
                                            <option value={false}>Student</option>
                                        </select>
                                    </div>
                                    <div className="text-center mb-3">
                                        <MDBBtn
                                            type="button"
                                            gradient="blue"
                                            rounded
                                            className="btn-block z-depth-1a"
                                            onClick={this.register}
                                        >
                                            Register
                                        </MDBBtn>
                                    </div>
                                </MDBCardBody>
                                <MDBModalFooter className="mx-5 pt-3 mb-1">
                                    <p className="font-small grey-text d-flex justify-content-end">
                                        Log in by username?
                                 <NavLink to="/login">
                                            <span className="blue-text ml-1">Sign in</span>
                                        </NavLink>
                                    </p>
                                </MDBModalFooter>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default SocialLoginConfirmRole;