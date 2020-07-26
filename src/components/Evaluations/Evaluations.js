import React, { useEffect, useState } from 'react';
import { Grid, Placeholder } from 'semantic-ui-react';
import AssociateService from '../../services/associate.service';
import SpiderChart from '../SpiderCharts/SpiderChart';
import QC from '../QC/qc';
import './Evaluations.scss';

const Evaluations = (props) => {
  const associateService = new AssociateService();

  const [spiderLabels, setSpiderLabels] = useState([]);
  const [batchSpiderData, setBatchSpiderData] = useState([]);
  const [associateSpiderData, setAssociateSpiderData] = useState([]);

  const [qcSkills, setQCSkills] = useState([]);
  const [qcData, setQCData] = useState([]);
  const [qcNotes, setQCNotes] = useState([]);

  useEffect(() => {
    const getEvals = async () => {
      const resp = await associateService.getEvaluations(props.associate.userID);

      /* processing for spider chart data */
      const spiderLabelsTemp = []
      const batchSpiderDataTemp = []
      const associateSpiderDataTemp = []
      for (const spiderEval of resp.data.batch_spider) {
        spiderLabelsTemp.push(spiderEval.assessmentType)
        batchSpiderDataTemp.push(spiderEval.score)
      }
      for (const spiderEval of resp.data.associate_spider) {
        associateSpiderDataTemp.push(spiderEval.score)
      }
      console.log(batchSpiderDataTemp);
      console.log(associateSpiderDataTemp);
      setSpiderLabels(spiderLabelsTemp)
      setBatchSpiderData(batchSpiderDataTemp)
      setAssociateSpiderData(associateSpiderDataTemp)

      /* processing for QC eval data */
      const qcDataTemp = []
      const qcSkillsTemp = []
      const qcNotesTemp = []

      for (const qcEval of resp.data.qc) {
        qcNotesTemp.push(qcEval)
        if (qcEval.skill !== 'No Skill Provided for this QC') {
          qcSkillsTemp.push(qcEval.skill)
        } else { qcSkillsTemp.push('Unnamed') }
        let allowedScores = ['poor', 'average', 'good', 'superstar'];
        if (allowedScores.includes(qcEval.score.toLowerCase())) {
          qcDataTemp.push(qcEval.score)
        } else {
          qcDataTemp.push(null);;  // should leave a gap in line
        }
        // switch (qcEval.score.toLowerCase()) {
        //   case 'poor':
        //     qcDataTemp.push(1);
        //     break;
        //   case 'average':
        //     qcDataTemp.push(2);
        //     break;
        //   case 'good':
        //     qcDataTemp.push(3);
        //     break;
        //   case 'superstar':
        //     qcDataTemp.push(4);
        //     break;
        //   default: // the data is null if invalid
        //     qcDataTemp.push(null);;  // should leave a gap in line
        //     break;
        // }
      }
      setQCNotes(qcNotesTemp)
      console.log(qcDataTemp)
      setQCData(qcDataTemp)
      setQCSkills(qcSkillsTemp)
    }
    getEvals();
  }, [])

  return (
    <Grid container stackable columns={2} className="associate-eval">
      <Grid.Column className="wrapper">
        <SpiderChart
          className="associate-chart"
          name={props.associate.name}
          userID={props.associate.userID}
          spiderLabels={spiderLabels}
          batchSpider={batchSpiderData}
          associateSpider={associateSpiderData}
        />
      </Grid.Column>

      <Grid.Column className="wrapper">
        <QC
          className="associate-chart"
          name={props.associate.name}
          userID={props.associate.userID}
          qcData={qcData}
          qcSkills={qcSkills}
          qcNotes={qcNotes}
          showYLabels={props.showYLabels}
          showNotes={props.showNotes}
        />
      </Grid.Column>
    </Grid>
  );

}

export default Evaluations
