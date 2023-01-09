import React, { useState } from "react";
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginVector from "../../Stock Images/login.png";
import GoogleLogo from "../../Stock Images/googleLogo.png";
import LinkedInLogo from "../../Stock Images/linkedInLogo.png";
import BreatheESG from "../../Stock Images/BreatheESG.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import {gapi} from "gapi-script";
import { signin, signup } from '../../actions/auth';
export default function Login() {
  gapi.load("client:auth2", () => { gapi.client.init({ clientId: "75975302017-8deti4qrdl5i3td94ku8n5dta7hthtb4.apps.googleusercontent.com", plugin_name: "chat", }); });
  const dispatch  = useDispatch();
  const navigate = useNavigate();
  const [errorMsg,setErrorMsg]= useState("");
  const [userLogin,setUserLogin]=useState({
    email:"",
    password:""
  })
  const [isLogin,setIsLogIn]= useState(false);
  const handleInput=(e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setUserLogin({...userLogin,[name]:value})
  }
  const googleSuccess = async (res) => {
    // console.log(res)
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: 'AUTH', data: { result, token } });

      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = (error) => {console.log(error);console.log('Google Sign In was unsuccessful. Try again later');}
  const handleSubmit  = async ()=>{

    // console.log(userLogin)
    // if (isLogin) {
      dispatch(signin(userLogin, navigate,setErrorMsg));
    // } else {
    //   dispatch(signup(userLogin, navigate));
    // }
  }
  
  return (
    <div className="OuterContainer1">
      <div className="vectors">
        <img src={BreatheESG} className="BreatheeESG-img" />
        <img src={LoginVector} alt="" className="LoginVector" />
      </div>
      <div className="container2">
        <Container>
          <Row>
            <Col>
              {" "}
              <h1 style={{ fontWeight: "750" }}>Login</h1>
            </Col>
          </Row>
          <Row>
            <Col>Welcome back! Login to your account.</Col>
          </Row>
          <br />
          <Row>
            <Col>
             <GoogleLogin           
            clientId="75975302017-8deti4qrdl5i3td94ku8n5dta7hthtb4.apps.googleusercontent.com"
            render={(renderProps) => (
              <button className="loginFormContainer" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled}>
              <img
                src={GoogleLogo}
                style={{ height: "1.6rem", width: "1.6rem", margin: "5px" }}
              />
              <div> Sign Up with google </div>
            </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
           
            </Col>
            <Col>
              <a><div className="loginFormContainer">
                <img
                  src={LinkedInLogo}
                  style={{ height: "1.6rem", width: "1.6rem", margin: "5px" }}
                />
                <div> Sign Up with LinkedIn </div>
              </div></a>
            </Col>
          </Row>
          <br />
          <Row
            style={{
              textAlign: "center",
            }}
          >
            <Col>
              <b>- OR -</b>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                  style={{ border: "0px 0px 10px 0px" }}
                >
                  <Form.Control
                    className="inputBox"
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={userLogin.email}
                    onChange={handleInput}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                   value={userLogin.password}
                   onChange={handleInput}
                    className="inputBox"
                    style={{}}
                    name='password'
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <p
                style={{
                  fontWeight: "750",
                  color: "red",
                  fontSize: "0.9rem",
                }}
              >
                {errorMsg}
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p
                style={{
                  fontWeight: "750",
                  color: "#66A68F",
                  fontSize: "0.9rem",
                }}
              >
                Forgot Password?
              </p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Button
                variant="success"
                style={{
                  width: "100%",
                  color: "black",
                  fontWeight: "750",
                  backgroundColor: "#AEE3D0",
                  border: "none",
                }}
                onClick={handleSubmit}
              >
                Login
              </Button>
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.9rem",
                marginTop: "7px",
              }}
            >
              Don't have a Account?
              <Link to='/signup'>  <div style={{ fontWeight: "750", color: "#66A68F" }}>
              Create Account
              </div></Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
