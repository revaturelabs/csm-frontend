import React, { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import './DisplayAssociates.scss';
import Evaluations from '../Evaluations/Evaluations';

const DisplayAssociate = (props) => {
  const [assocActiveIndex, setAssocActiveIndex] = useState(-1);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = assocActiveIndex === index ? -1 : index
    setAssocActiveIndex(newIndex)
  }

  return (
    <Accordion styled className='associate-accordion'>
      <Accordion.Title
        active={assocActiveIndex === 0}
        index={0}
        onClick={handleClick}
        className='title'>
        <Icon name='dropdown' />
        <span className='id'>{props.associate.name}</span>
        <span className='name'>{props.associate.userID}</span>
        <span className='batch'>{props.batchName}</span>
        <span className='pro_date'>Promoted: {props.batchProDate}</span>
      </Accordion.Title>
      <Accordion.Content active={assocActiveIndex === 0}>
        <Evaluations associate={props.associate}/>
      </Accordion.Content>
    </Accordion>
  )
}

export default DisplayAssociate;