import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Login.css';
import ManagerService from '../../services/manager.service'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'

const Login = (props) => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();

    const userService = new ManagerService();

    const login = async () => {
        let loggedUser = await userService.login(state.email)
        sessionStorage.setItem('loggedUser', JSON.stringify(loggedUser.data));
        dispatch({ type: 'login', user: loggedUser.data })
        history.push('/')
    }

    return (
        <Grid id='grid' textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Image src='https://app.revature.com/core/resources/download/organizations/logos/89c5d424854a06ca216c885f43550bcc.png/empImage' 
            verticalAlign='middle'/>
                <Header as='h2' color='orange' textAlign='center'>
                    Log-in to your account
      </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />

                        <Button color='orange' fluid size='large' onClick={login} >
                            Login
          </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default Login;