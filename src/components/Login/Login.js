import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Login.css';
import ManagerService from '../../services/manager.service'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'


const Login = (props) => {
    const managerState = useSelector(state => state.managerReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    const managerService = new ManagerService();

    const login = async () => {
        const resp = await managerService.login(managerState.email);
        dispatch({type: 'login', manager: resp.data})
        history.push('/promotedlastweek') // this may change
    }

    const handleEnter = (e) => { 
        if (e.key === 'Enter') { 
            login() 
        }
    }

    const handleInput = (e) => {
        dispatch({ type: 'handleEmail', email: e.target.value })
    }

    return (
        <Grid id='grid'>
            <Grid.Column id='gridcolumn'>
            <Image src='https://app.revature.com/core/resources/download/organizations/logos/89c5d424854a06ca216c885f43550bcc.png/empImage' 
            verticalAlign='middle'/>
                <Header id='title'>
                    Log-in to your account
                </Header>
                <Form id='form'>
                    <Segment stacked>
                        <Form.Input 
                            fluid 
                            icon='user' 
                            iconPosition='left' 
                            placeholder='E-mail address' 
                            onChange={handleInput}
                            onKeyDown={handleEnter}
                        />

                        <Button id='btn' fluid onClick={login} >
                            Login
                        </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default Login;