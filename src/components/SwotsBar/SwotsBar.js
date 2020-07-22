<<<<<<< HEAD
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { Menu } from 'semantic-ui-react';
import './SwotsBar.css';

const SwotsBar = (props) => {
    const startDate = useSelector((state) => state.swotReducer.startDate);
    const endDate = useSelector((state) => state.swotReducer.endDate);
    const dispatch = useDispatch();

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
                <DatePicker selected={startDate} onChange={handleStartDate}></DatePicker>
                &nbsp; End Date: &nbsp;
                <DatePicker selected={endDate} onChange={handleEndDate}></DatePicker>
            </Menu.Item>
        </Menu>
    )
}

export default SwotsBar;
