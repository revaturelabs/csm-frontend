import React from 'react';
import { useDispatch, useSelector, useCallback } from 'react-redux';
import DatePicker from 'react-datepicker';
import { Menu, Button, Icon } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import SwotService from '../../services/swot.service.js';
import './SwotsBar.css';

const SwotsBar = (props) => {
    let startDate = useSelector((state) => state.swotReducer.startDate);
    let endDate = useSelector((state) => state.swotReducer.endDate);
    const swots = useSelector((state) => state.swotReducer.swots);
    const dispatch = useDispatch();
    const history = useHistory();
    const filterSwots = () => {
        console.log(swots)
        for (const swot of swots) {
            console.log(swot);
        }
        dispatch({type: 'updateDisplaySwots', getDisplaySwots: swots})
    }
    const handleStartDate = (date) => {
        startDate = date;
        dispatch({type: 'updateStartDate', startDate: date});
        filterSwots();
    }

    const handleEndDate = (date) => {
        endDate = date;
        dispatch({type: 'updateEndDate', endDate: date});
        filterSwots();
    }

    const handleBack = e => {
        e.preventDefault();
        dispatch({type: 'updateAssociate', associate: {}});
        history.push('/promotedlastweek');
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
<<<<<<< HEAD
                Example Student
=======
                <Button icon onClick={handleBack}><Icon name={'arrow left'}/></Button>
            </Menu.Item>
            <Menu.Item>
                {associate.email}
>>>>>>> 96b349fc72441f05703ce239c399621ade79e031
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
                <DatePicker selected={startDate} onChange={handleStartDate}></DatePicker>
                &nbsp; End Date: &nbsp;
                <DatePicker selected={endDate} onChange={handleEndDate}></DatePicker>
            </Menu.Item>
        </Menu>
    )
}

export default SwotsBar;
