import React, { useState } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import "./DisplayAssociates.scss";
import Evaluations from "../Evaluations/Evaluations";

const DisplayAssociate = (props) => {
  const dispatch = useDispatch();
  const [assocActiveIndex, setAssocActiveIndex] = useState(-1);

  const handleClick = (e, titleProps) => {
<<<<<<< HEAD
    const { index } = titleProps
    const newIndex = assocActiveIndex === index ? -1 : index
    setAssocActiveIndex(newIndex)
  }

  const viewSwots = () => {
    const getAssociateInfo = async () => {
        let resp = await associateService.getSpiderInformation(props.associate.userID);
        dispatch({ type: 'updateAssociate', associate: resp.data });
        history.push('/viewSwots');
    }
    getAssociateInfo();

  }
=======
    dispatch({ type: "resetEvalDate" });
    const { index } = titleProps;
    const newIndex = assocActiveIndex === index ? -1 : index;
    setAssocActiveIndex(newIndex);
  };
>>>>>>> 7ba30ffc46581d1e6d208365e45aca8e74bc14f4

  return (
    <Accordion styled className="associate-accordion">
      <Accordion.Title
        active={assocActiveIndex === props.ind}
        index={props.ind}
        onClick={handleClick}
<<<<<<< HEAD
        className='title'>
        <Icon name='dropdown' />
        {/* These keys may change */}
        <span className='id'>{props.associate.name}</span>
        <span className='name'>{props.associate.userID}</span>
        <span className='batch'>{props.batchName}</span>
        <span className='pro_date'>Promoted: {props.batchProDate}</span>
=======
        className="title"
      >
        <Icon name="dropdown" />
        <span className="name loud">{props.associate.name}</span>
        <span className="id">{props.associate.userID}</span>
        <span className="pro_date right">{props.batchName} &nbsp; | &nbsp; Promoted: {props.batchProDate}</span>
>>>>>>> 7ba30ffc46581d1e6d208365e45aca8e74bc14f4
      </Accordion.Title>
      <Accordion.Content active={assocActiveIndex === props.ind}>
        {assocActiveIndex === props.ind ? (
          <>
            <Evaluations
              associate={props.associate}
              showYLabels={false}
              showNotes={false}
            />
          </>
        ) : null}
      </Accordion.Content>
    </Accordion>
  );
};

export default DisplayAssociate;
