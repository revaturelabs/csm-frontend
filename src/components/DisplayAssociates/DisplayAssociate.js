import React, { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import './DisplayAssociates.scss';
import SpiderChart from '../SpiderCharts/SpiderChart'
import QC from '../QC/qc'

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
        {/* These keys may change */}
        <span className='id'>{props.associate.name}</span>
        <span className='name'>{props.associate.userID}</span>
        <span className='batch'>{props.batchName}</span>
        <span className='pro_date'>Promoted: {props.batchProDate}</span>
      </Accordion.Title>
      <Accordion.Content active={assocActiveIndex === 0}>
        {/* placeholder for the evaluation */}
          {/* <div className='swot-actions'></div> */}
          {/* <div className='associate-eval'> */}
          <SpiderChart 
            className='associate-chart'
            associate={props.associate}
            spider_batch={axiosResp.batch_spider}
            spider_associate={axiosResp.associate_spider}
          />
            <QC className='associate-chart'
              qc={axiosResp.qc}
            /> 
          {/* </div> */}
       
      </Accordion.Content>
    </Accordion>
  )
}

export default DisplayAssociate;

var axiosResp = {
  "batch_spider": [
    {
      "assessmentType": "Pega",
      "score": 80,
      "week": 1
    },
    {
      "assessmentType": "Hadoop",
      "score": 12,
      "week": 1
    },
    {
      "assessmentType": "Hive",
      "score": 52,
      "week": 1
    },
    {
      "assessmentType": "Spring Boot",
      "score": 50.82105253751461,
      "week": 1
    },
    {
      "assessmentType": "SQL",
      "score": 61.214165467482346,
      "week": 2
    },
    {
      "assessmentType": "Jenkins",
      "score": 47.758388445927544,
      "week": 2
    },
    {
      "assessmentType": "DevOps",
      "score": 52.958619356155396,
      "week": 2
    },
    {
      "assessmentType": "Python",
      "score": 53.31237074045035,
      "week": 3
    },
    {
      "assessmentType": "gRPC",
      "score": 43.325785856980545,
      "week": 3
    },
    {
      "assessmentType": "REST",
      "score": 46.48748390491192,
      "week": 3
    },
    {
      "assessmentType": "Pega",
      "score": 63.8988891014686,
      "week": 4
    },
    {
      "assessmentType": "DevOps",
      "score": 51.50184007791373,
      "week": 4
    },
    {
      "assessmentType": "JDBC",
      "score": 62.39635142913232,
      "week": 4
    },
    {
      "assessmentType": "Git",
      "score": 59.09999642005334,
      "week": 4
    },
    {
      "assessmentType": "Helm",
      "score": 38.84446589763348,
      "week": 5
    },
    {
      "assessmentType": "REST",
      "score": 59.40743424342229,
      "week": 5
    },
    {
      "assessmentType": "jUnit",
      "score": 57.484181330754204,
      "week": 6
    },
    {
      "assessmentType": "Git",
      "score": 50.24251332649818,
      "week": 6
    },
    {
      "assessmentType": "J2EE",
      "score": 52.53633191035344,
      "week": 6
    },
    {
      "assessmentType": "jUnit",
      "score": 55.49956879248986,
      "week": 7
    },
    {
      "assessmentType": "DevOps",
      "score": 56.6874905366164,
      "week": 7
    }
  ],
  "associate_spider": [
    {
      "assessmentType": "Pega",
      "score": 58.37634068268996,
      "week": 1
    },
    {
      "assessmentType": "Hadoop",
      "score": 48.057725759652946,
      "week": 1
    },
    {
      "assessmentType": "Hive",
      "score": 48.00955217618208,
      "week": 1
    },
    {
      "assessmentType": "Spring Boot",
      "score": 50.82105253751461,
      "week": 1
    },
    {
      "assessmentType": "SQL",
      "score": 61.214165467482346,
      "week": 2
    },
    {
      "assessmentType": "Jenkins",
      "score": 47.758388445927544,
      "week": 2
    },
    {
      "assessmentType": "DevOps",
      "score": 52.958619356155396,
      "week": 2
    },
    {
      "assessmentType": "Python",
      "score": 53.31237074045035,
      "week": 3
    },
    {
      "assessmentType": "gRPC",
      "score": 43.325785856980545,
      "week": 3
    },
    {
      "assessmentType": "REST",
      "score": 46.48748390491192,
      "week": 3
    },
    {
      "assessmentType": "Pega",
      "score": 63.8988891014686,
      "week": 4
    },
    {
      "assessmentType": "DevOps",
      "score": 51.50184007791373,
      "week": 4
    },
    {
      "assessmentType": "JDBC",
      "score": 62.39635142913232,
      "week": 4
    },
    {
      "assessmentType": "Git",
      "score": 59.09999642005334,
      "week": 4
    },
    {
      "assessmentType": "Helm",
      "score": 38.84446589763348,
      "week": 5
    },
    {
      "assessmentType": "REST",
      "score": 59.40743424342229,
      "week": 5
    },
    {
      "assessmentType": "jUnit",
      "score": 57.484181330754204,
      "week": 6
    },
    {
      "assessmentType": "Git",
      "score": 50.24251332649818,
      "week": 6
    },
    {
      "assessmentType": "J2EE",
      "score": 52.53633191035344,
      "week": 6
    },
    {
      "assessmentType": "jUnit",
      "score": 55.49956879248986,
      "week": 7
    },
    {
      "assessmentType": "DevOps",
      "score": 56.6874905366164,
      "week": 7
    }
  ],
  "qc": [
    {
      "skill": "No Skill Provided for this QC",
      "score": "Poor",
      "content": "This is a Qc note on week 1"
    },
    {
      "skill": "No Skill Provided for this QC",
      "score": "Average",
      "content": "This is a Qc note on week 2"
    },
    {
      "skill": "No Skill Provided for this QC",
      "score": "Superstar",
      "content": "This is a Qc note on week 3"
    },
    {
      "skill": "No Skill Provided for this QC",
      "score": "Average",
      "content": "This is a Qc note on week 4"
    },
    {
      "skill": "No Skill Provided for this QC",
      "score": "Average",
      "content": "This is a Qc note on week 5"
    },
    {
      "skill": "No Skill Provided for this QC",
      "score": "Average",
      "content": "This is a Qc note on week 6"
    },
    {
      "skill": "No Skill Provided for this QC",
      "score": "Poor",
      "content": "This is a Qc note on week 7"
    },
    {
      "skill": "No Skill Provided for this QC",
      "score": "Average",
      "content": "This is a Qc note on week 8"
    },
    {
      "skill": "No Skill Provided for this QC",
      "score": "Average",
      "content": "This is a Qc note on week 9"
    }
  ]
}
