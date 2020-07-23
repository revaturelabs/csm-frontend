import React, { Component, useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import './DisplayAssociates.css';
import SpiderChart from '../SpiderCharts/SpiderChart'
import QC from '../QC/qc'

const DisplayAssociate = (props) => {
  const [assocActiveIndex, setAssocActiveIndex] = useState(-1);
  // state = { activeIndex: -1 }

  // id = 'echavarria.f@gmail.com';
  // name = 'Felix Echavarria';
  // batch = 'Python WVU'
  // pro_date = '07/31/2020'

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = assocActiveIndex === index ? -1 : index
    setAssocActiveIndex(newIndex)
    
    // const { index } = titleProps
    // const { activeIndex } = this.state
    // const newIndex = activeIndex === index ? -1 : index

    // this.setState({ activeIndex: newIndex })
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
        <span className='name'>{props.associate.email}</span>
        <span className='batch'>{props.batchName}</span>
        <span className='pro_date'>Promoted: {props.batchProDate}</span>
      </Accordion.Title>
      <Accordion.Content active={assocActiveIndex === 0}>
        {/* placeholder for the evaluation
          <SpiderChart className='associate-chart'/>
          <QC className='associate-chart'/> 
        */}
      </Accordion.Content>
    </Accordion>
  )
}

export default DisplayAssociate;