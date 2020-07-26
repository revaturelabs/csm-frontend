import React from 'react';
import { useDispatch, useSelector, useCallback } from 'react-redux';
import DatePicker from 'react-datepicker';
import { Menu, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import SwotService from '../../services/swot.service.js';
import './SwotsBar.scss';

const SwotsBar = (props) => {
    const associate = useSelector((state) => state.swotReducer.currentAssociate);
    const swots = useSelector((state) => state.swotReducer.currentAssociate.swot);
    let displaySwots = useSelector((state) => state.swotReducer.displaySwots);
    let startDate = new Date(useSelector((state) => state.swotReducer.currentAssociate.end_date));
    let endDate = new Date(useSelector((state) => state.swotReducer.endDate));
    const dispatch = useDispatch();
    const history = useHistory();
    startDate.setDate(startDate.getDate()-14);
    const filter = (start, end) => {
        let arr = swots;
        arr = arr.filter(swot => new Date(swot.date_created) >= new Date(start) && new Date(swot.date_created) <= new Date(end));
        dispatch({type: 'updateDisplaySwots', getDisplaySwots: arr})
    }
    const handleStartDate = (date) => {
        filter(date, endDate);
        dispatch({type: 'updateStartDate', startDate: date});
    }

    const handleEndDate = (date) => {
        filter(startDate, date);
        dispatch({type: 'updateEndDate', endDate: date});
    }

    const handleBack = (e) => {
      e.preventDefault();
      dispatch({ type: "updateAssociate", associate: {} });
      history.push("/promotedlastweek");
    };

    const addSwot = () => {
        const data = {
          date_created: new Date(),
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
        <Menu size={'huge'} stackable>
            <Menu.Item className="orange" header>
                {associate.name}
            </Menu.Item>
            <Menu.Item className="orange" header>
                {associate.batch_id}
            </Menu.Item>
            <Menu.Item className="orange">
                <Button className="swot" onClick={() => addSwot()}>+ SWOT</Button>
            </Menu.Item>
            <Menu.Item className="orange" header>
                Filter SWOTs by Date:
            </Menu.Item>
            <Menu.Item className="orange" header>
                Start: &nbsp;<DatePicker selected={startDate} onChange={handleStartDate}></DatePicker>
            </Menu.Item>
            <Menu.Item className="orange" header>
                End: &nbsp;<DatePicker selected={endDate} onChange={handleEndDate}></DatePicker>
            </Menu.Item>
        </Menu>
    )
}

export default SwotsBar;
