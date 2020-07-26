import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Login.scss";
import ManagerService from "../../services/manager.service";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";
import logo from "../../images/logo.png";

const Login = (props) => {
  const managerState = useSelector((state) => state.managerReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const managerService = new ManagerService();

  const checkLogin = () => {
    return JSON.parse(sessionStorage.getItem("loggedUser")) ? true : false;
  };

  useEffect( () => {
    if (checkLogin()) { history.push('/promotedlastweek') }
  },[])

  const login = async () => {
    let manager = await managerService.login(managerState.email);
    if (manager.data) {
      sessionStorage.setItem("loggedUser", JSON.stringify(manager.data));
      dispatch({ type: "login", manager: manager.data });
      history.push("/promotedlastweek");
    } else {
      alert('Login failed, wrong usename');
    }
  }

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      login();
    }
  };

  const handleInput = (e) => {
    dispatch({ type: "handleEmail", email: e.target.value });
  };

  return (
    <Grid id="grid">
      <Grid.Column id="gridcolumn">
        <Image
          src={logo}
          verticalAlign="middle"
        />
        <Header id="title">Log-in to your account</Header>
        <Form id="form">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={handleInput}
              onKeyDown={handleEnter}
            />

            <Button id="btn" fluid onClick={login}>
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
