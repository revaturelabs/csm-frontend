import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { Menu, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import SwotService from '../../services/swot.service.js';
import './SwotsBar.css';

const SwotsBar = (props) => {
    const startDate = useSelector((state) => state.swotReducer.startDate);
    const endDate = useSelector((state) => state.swotReducer.endDate);
    const swots = useSelector((state) => state.swotReducer.swots);
    const dispatch = useDispatch();
<<<<<<< HEAD
    const filterSwots = (event) => {
        for (const swot of swots) {
            console.log(swot);
        }
        dispatch({type: 'updateDisplaySwots', getDisplaySwots: swots})
    }
=======
    const history = useHistory();

>>>>>>> 5f04a5a173918847eddf2ea1f4b3ce3999f13547
    const handleStartDate = date => {
        dispatch({type: 'updateStartDate', startDate: date})
    }

    const handleEndDate = date => {
        dispatch({type: 'updateEndDate', endDate: date})
    }

    const addSwot = () => {
        const data = {
          date: null,
          Strengths: [],
          Weaknesses: [],
          Opportunities: [],
          Threats: [],
          Notes: ''
        }
        dispatch({type: 'updateEditable', editable: true})
        dispatch({type: 'updateSWOT', SWOT: data})
        history.push('/editSWOT')
      }

    return (
        <Menu size={'huge'}>
            <Menu.Item>
                Example Student
            </Menu.Item>
            <Menu.Item>
                (Batch ID)
            </Menu.Item>
            <Menu.Item>
                <Button
                onClick={() => addSwot()}>+ SWOT</Button>
            </Menu.Item>
            <Menu.Item>
                Start Date: &nbsp;
                <DatePicker selected={startDate} onChange={handleStartDate,filterSwots}></DatePicker>
                &nbsp; End Date: &nbsp;
                <DatePicker selected={endDate} onChange={handleEndDate,filterSwots}></DatePicker>
            </Menu.Item>
        </Menu>
    )
}

export default SwotsBar;
