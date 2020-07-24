import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { Menu, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import './SwotsBar.css';

const SwotsBar = (props) => {
    const startDate = useSelector((state) => state.swotReducer.startDate);
    const endDate = useSelector((state) => state.swotReducer.endDate);
    const dispatch = useDispatch();
    const history = useHistory();
    const associate = useSelector((state) => state.swotReducer.currentAssociate)

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
                {associate.email}
            </Menu.Item>
            <Menu.Item>
                {associate.batch_id}
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
