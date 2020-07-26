import React, { useState } from 'react';
import { Accordion, Icon, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import AssociateService from '../../services/associate.service'
import './DisplayAssociates.scss';
import Evaluations from '../Evaluations/Evaluations';

const DisplayAssociate = (props) => {
  const dispatch = useDispatch();
  const associateService = new AssociateService();
  const [assocActiveIndex, setAssocActiveIndex] = useState(-1);

  const handleClick = (e, titleProps) => {
    dispatch({type: 'resetEvalDate'})
    const { index } = titleProps
    const newIndex = assocActiveIndex === index ? -1 : index
    setAssocActiveIndex(newIndex)
  }

  

  return (
    <Accordion styled className='associate-accordion'>
      <Accordion.Title
        active={assocActiveIndex === props.ind}
        index={props.ind}
        onClick={handleClick}
        className='title'>
        <Icon name='dropdown' />
        <span className='name loud'>{props.associate.name}</span>
        <span className='id'>{props.associate.userID}</span>
        <span className='batch'>{props.batchName}</span>
        <span className='pro_date'>Promoted: {props.batchProDate}</span>
      </Accordion.Title>
      <Accordion.Content active={assocActiveIndex === props.ind}>
        {assocActiveIndex === props.ind ?
          <>

            <Evaluations 
              associate={props.associate}
              showYLabels={false}
              showNotes={false}
            />
          </>
        : null }
      </Accordion.Content>
    </Accordion>
  )
}

export default DisplayAssociate;
