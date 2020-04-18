import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./Main.css";

class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="MainDisplay">
          <div className="MainContainer">
            <div>
              <div className="MainHeader">
                <i className="fad fa-4x fa-cut fade-in set-size"></i>
                <Button.Group size="large">
                  <Link to="/login">
                    <Button>Login</Button>
                  </Link>
                  <Button.Or />
                  {/* <Link to='/setupapp' ><WhiteBtn>Set Up Appointment</WhiteBtn></Link> */}
                  <Link to="/register">
                    <Button>Register</Button>
                  </Link>
                </Button.Group>
                <i className="fad fa-4x fa-cut fa-rotate-180 fade-in set-size"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
