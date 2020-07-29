import React from "react";
import { Accordion, Icon } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import "./DisplayAssociates.scss";
import Evaluations from "../Evaluations/Evaluations";

const DisplayAssociate = (props) => {
  const dispatch = useDispatch();
  const [assocActiveIndex, setAssocActiveIndex] = React.useState(-1);

  const handleClick = (e, titleProps) => {
    dispatch({ type: "resetEvalDate" });
    const { index } = titleProps;
    const newIndex = assocActiveIndex === index ? -1 : index;
    setAssocActiveIndex(newIndex);
  };

  return (
    <Accordion styled className="associate-accordion">
      <Accordion.Title
        active={assocActiveIndex === props.ind}
        index={props.ind}
        onClick={handleClick}
        className="title"
      >
        <Icon name="dropdown" />
        <span className="name loud">{props.associate.name}</span>
        <span className="id">{props.associate.userID}</span>
        <span className="batchName right">{props.batchName}</span>
        <span className="pro_date right">Promoted: {props.batchProDate}</span>
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
