import React,{useState} from "react";
import LoginVector from "../../Stock Images/login.png";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BreatheESG from "../../Stock Images/BreatheESG.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from 'react-router-dom';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { signin, signup } from '../../actions/auth';
export default function Login() {
    const [userSignUp,setUserSignUp]=useState({
        firstname:"",
        lastname:"",
        email:"",
        number:"",
        password:"",
        password2:""
      })
      const dispatch  = useDispatch();
      const navigate = useNavigate();
      const [isSignin,setIsSignIn]= useState(false);
      const [errMsg,setErrMsg]= useState("");
      const handleInput=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
    
        setUserSignUp({...userSignUp,[name]:value})
      }
      const handleSubmit =async()=>{
        dispatch(signup(userSignUp, navigate,setErrMsg));
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
              <h1 style={{ fontWeight: "750" }}>Sign Up</h1>
            </Col>
          </Row>
        
          <br />
        
          <br />
          <Row>
            <Col>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="formFirstName"
                  style={{ border: "0px 0px 10px 0px" }}
                >
                  <Form.Control
                   value={userSignUp.firstname}
                   name="firstname"
                   onChange={handleInput}
                    className="inputBox"
                    type="Name"
                    placeholder="First Name"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formEmail"
                  style={{ }}
                >
                  <Form.Control
                  name="lastname"
                    value={userSignUp.lastname}
                    onChange={handleInput}
                    className="inputBox"
                    type="text"
                    placeholder="Last Name"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formLastName"
                  style={{ }}
                >
                  <Form.Control
                    value={userSignUp.email}
                    name="email"
                    onChange={handleInput}
                    className="inputBox"
                    type="text"
                    placeholder="Email"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formNumber"
                  style={{ }}
                >
                  <Form.Control
                    value={userSignUp.number}
                    name="number"
                    onChange={handleInput}
                    className="inputBox"
                    type="text"
                    placeholder="Phone No."
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                      value={userSignUp.password}
                      onChange={handleInput}
                    name="password"
                    className="inputBox"
                    style={{}}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                  <Form.Control
                    name="password2"
                    value={userSignUp.password2}
                    onChange={handleInput}
                    className="inputBox"
                    style={{}}
                    type="password"
                    placeholder="Confirm Password"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
        
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
                Sign Up
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
                {errMsg}
              </p>
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
              Already have a Account?
              <Link to='/login'>  <div style={{ fontWeight: "750", color: "#66A68F" }}>
              Log In
              </div></Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}