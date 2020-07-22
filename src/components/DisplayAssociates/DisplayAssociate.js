import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import './DisplayAssociates.css';
import SpiderChart from '../SpiderCharts/SpiderChart'
import QC from '../QC/qc'

export default class DisplayAssociate extends Component {
  state = { activeIndex: -1 }

  id = 'echavarria.f@gmail.com';
  name = 'Felix Echavarria';
  batch = 'Python WVU'
  pro_date = '07/31/2020'

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}>
          <Icon name='dropdown' />
          {this.props.title}
          {/* <div className='id'>{props.associate.ID}</div>
          <div className='name'>{props.associate.Name}</div>
          <div className='batch'>{props.associate.batch}</div>
          <div className='pro_date'>{props.associate.pro_date}</div> */}
          <div className='id'>{this.id} | {this.name} | {this.batch} | {this.pro_date}</div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <SpiderChart />
          <QC />
        </Accordion.Content>
      </Accordion>
    )
  }
}