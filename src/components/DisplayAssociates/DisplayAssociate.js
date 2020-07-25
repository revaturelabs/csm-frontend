import React, { useState } from 'react';
import { Accordion, Icon, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import AssociateService from '../../services/associate.service'
import './DisplayAssociates.scss';

const DisplayAssociate = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const associateService = new AssociateService();
  const [assocActiveIndex, setAssocActiveIndex] = useState(-1);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = assocActiveIndex === index ? -1 : index
    setAssocActiveIndex(newIndex)
  }

  const viewSwots = () => {
    const getAssociateInfo = async () => {
        let startDate = new Date(props.batchProDate);
        startDate.setDate(startDate.getDate()-14);
        props.associate.proDate = startDate;
        dispatch({ type: 'updateAssociate', associate: props.associate });
        history.push('/viewSwots');
    }
    getAssociateInfo();
  }

  return (
    <Accordion styled className='associate-accordion'>
      <Accordion.Title
        active={assocActiveIndex === 0}
        index={0}
        onClick={handleClick}
        className='title'>
        <Icon name='dropdown' />
        {/* These keys may change */}
        <span className='id'>{props.associate.name}</span>
        <span className='name'>{props.associate.userID}</span>
        <span className='batch'>{props.batchName}</span>
        <span className='pro_date'>Promoted: {props.batchProDate}</span>
      </Accordion.Title>
      <Accordion.Content active={assocActiveIndex === 0}>
        {/* placeholder for the evaluation charts */}
        <span><Button onClick={viewSwots}>View SWOTs</Button></span>
      </Accordion.Content>
    </Accordion>
  )
}

export default DisplayAssociate;
