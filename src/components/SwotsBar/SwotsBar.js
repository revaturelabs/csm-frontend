import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { Menu } from 'semantic-ui-react';
import SwotService from '../../services/swot.service.js';
import './SwotsBar.css';

const SwotsBar = (props) => {
    const startDate = useSelector((state) => state.swotReducer.startDate);
    const endDate = useSelector((state) => state.swotReducer.endDate);
    const swots = useSelector((state) => state.swotReducer.swots);
    const dispatch = useDispatch();
    const filterSwots = (event) => {
        for (const swot of ) {
            if(category.skillCategory.toLowerCase().search(pattern.skillCategory.toLowerCase()) > -1) {
                elements.push(category);
            }
        }
        dispatch({type: 'updateDisplaySwots', getDisplaySwots: elements})
    }
    const handleStartDate = date => {
        dispatch({type: 'updateStartDate', startDate: date})
    }

    const handleEndDate = date => {
        dispatch({type: 'updateEndDate', endDate: date})
    }

    return (
        <Menu size={'huge'}>
            <Menu.Item>
                Derek Jou
            </Menu.Item>
            <Menu.Item>
                (Batch ID)
            </Menu.Item>
            <Menu.Item>
                (Whatever else)
            </Menu.Item>
            <Menu.Item>
                Start Date: &nbsp;
                <DatePicker selected={startDate} onChange={handleStartDate;filterSwots}></DatePicker>
                &nbsp; End Date: &nbsp;
                <DatePicker selected={endDate} onChange={handleEndDate;filterSwots}></DatePicker>
            </Menu.Item>
        </Menu>
    )
}

export default SwotsBar;
