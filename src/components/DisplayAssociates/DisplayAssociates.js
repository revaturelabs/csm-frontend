import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Accordion, Icon } from "semantic-ui-react";
import "./DisplayAssociates.scss";
import DisplayAssociate from "./DisplayAssociate";
import BatchService from "../../services/batch.service.js";

const loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
console.log(loggedUser);

const DisplayAssociates = (props) => {
  const batchesState = useSelector((state) => state.batchReducer);
  const managerState = useSelector((state) => state.managerReducer);
  const dispatch = useDispatch();
  const batchService = new BatchService();
  const [activeIndex, setActiveIndex] = useState(-1);



  useEffect(() => {
    document.title = "Promoted Last Week";
    const getBatch = async () => {
      let resp = await batchService.getBatches();
      let getManager = () => {
        if (!managerState.manager.id && loggedUser) {
          dispatch({
            type: "login",
            manager: loggedUser,
          });
          return loggedUser
        } else { return managerState.manager }
      }
      let res = [];
      for (const batch of resp.data) {
        if (batch.manager === getManager().username) {
          res.push(batch);
        }
      }
      dispatch({ type: "updateBatches", batches: res });
    };
    getBatch();
  }, []);

  const handleClick = (e, titleProps) => {
    /* handles accordion functionality */
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };

  return (
    <Container>
      <header>Associates Promoted Last Week</header>

      {/* mapping each batch to its own accordion */}
      {batchesState.batches.length > 0
        ? batchesState.batches.map((batch, ind) => {
            return (
              <Accordion styled className="batch-accordion" key={batch.batchID}>
                <Accordion.Title
                  active={activeIndex === ind}
                  index={ind}
                  onClick={handleClick}
                  className="title"
                >
                  <Icon name="dropdown" />
                  <span className="info loud">{batch.batchName} </span>
                  <span className="trainer">
                    {batch.trainer.length > 0
                      ? batch.trainer.map((trainer, ind) => {
                          return (
                            <span
                              key={trainer.employee.email}
                              className="info inline-join-list"
                            >
                              {trainer.employee.firstName}{" "}
                              {trainer.employee.lastName}
                            </span>
                          );
                        })
                      : null}
                  </span>
                  <span className="info">{batch.promotionDate} </span>
                  <span className="info">{batch.skill}</span>
                  <span className="info right">
                    {batch.associates.length} Associates
                  </span>
                  
                </Accordion.Title>
                <Accordion.Content active={activeIndex === ind}>
                  {batch.associates.length > 0
                    ? batch.associates.map((associate, ind) => {
                        return (
                          <DisplayAssociate
                            ind={ind}
                            key={associate.userID}
                            associate={associate}
                            manager={batch.manager}
                            batchName={batch.batchName}
                            batchProDate={batch.promotionDate}
                          />
                        );
                      })
                    : null}
                </Accordion.Content>
              </Accordion>
            );
          })
        : null}
    </Container>
  );
};

export default DisplayAssociates;
