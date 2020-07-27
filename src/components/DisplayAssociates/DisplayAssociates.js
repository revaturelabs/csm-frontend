import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Accordion, Icon, Menu, Loader, Button, Segment, Card, Dropdown } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import "./DisplayAssociates.scss";
import DisplayAssociate from "./DisplayAssociate";
import BatchService from "../../services/batch.service.js";

const DisplayAssociates = (props) => {
  const batchesState = useSelector((state) => state.batchReducer);
  const manager = useSelector((state) => state.managerReducer.manager);
  const dispatch = useDispatch();
  const history = useHistory();
  const batchService = new BatchService();
  const [activeIndex, setActiveIndex] = useState(-1);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if(!manager.username){
      dispatch({type: 'login', manager: JSON.parse(sessionStorage.getItem('loggedUser'))})
    }
    const getBatch = async () => {
      let resp = await batchService.getBatches();
      let res = [];
      for (const batch of resp.data) {
        let username = JSON.parse(sessionStorage.getItem("loggedUser")).username;
        if (batch.manager === username) {
          res.push(batch);
        }
      }
      dispatch({ type: "updateBatches", batches: resp.data });
      dispatch({ type: "updateDisplayBatches", batches: res });
      setFetching(false);
    };
    getBatch();
  }, []);


  const handleClick = (e, titleProps) => {
    /* handles accordion functionality */
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };

  const allFilter = (batches, managerName) => {
    let res = [];
    if (managerName) {
      for (const batch of batches) {
        if (batch.manager === managerName) {
          res.push(batch);
        }
      }
    } else {
      res = [...batches];
    }

    dispatch({ type: "updateDisplayBatches", batches: res });
  };

  const newFilter = (managerName) => {
    const currentDate = new Date();
    const endRange = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() - currentDate.getDay()
    );
    const startRange = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() - currentDate.getDay() - 7
    );
    console.log(startRange, endRange)
    let res = [];
    for (const batch of batchesState.batches) {
      // YYYY-MM-DD
      let promoDate = new Date(batch.promotionDate);
      if (promoDate < endRange && promoDate >= startRange) {
        res.push(batch);
      }
    }
    if (managerName !== '') {
      allFilter(res, managerName);
    } else {
      dispatch({ type: "updateDisplayBatches", batches: res });
      return
    }
  };

  const handleFilter = (event) => {
    const filter = event.target.id;
    dispatch({ type: "updateFilter", filter: filter });
    const managerName = JSON.parse(sessionStorage.loggedUser).username;
    // const otherName = managerName === "Emily" ? "Julie" : "Emily";
    switch (filter) {
      case "myNew":
        return newFilter(managerName);
      case "myAll":
        return allFilter(batchesState.batches, managerName);
      case "allNew":
        return newFilter('')
      case "all":
        return allFilter(batchesState.batches);
      default:
        return allFilter(batchesState.batches, managerName);
    }
  };

  const logout = () => {
    sessionStorage.clear();
    dispatch({type: 'logout'})
    history.push('/')
  }

  return (
    <Container fluid>
      <Segment>
        <header>List of Associates</header>
        <Dropdown text={manager.username} icon={'user circle'} labeled button className="user-actions icon">
          <Dropdown.Menu>
            <Dropdown.Item className="logout" icon='log out' text='Logout' onClick={logout}/>
          </Dropdown.Menu>
        </Dropdown>
        {/* <Button color="red">Logout</Button> */}
      </Segment>
    
      <Container>
        <Menu tabular>
          <Menu.Item
            id="myNew"
            active={batchesState.activeFilter === "myNew"}
            onClick={(e) => handleFilter(e)}
          >
            My Newly Promoted Associates
          </Menu.Item>
          <Menu.Item
            id="myAll"
            active={batchesState.activeFilter === "myAll"}
            onClick={(e) => handleFilter(e)}
          >
            All My Associates
          </Menu.Item>
          <Menu.Item
            id="allNew"
            active={batchesState.activeFilter === "allNew"}
            onClick={(e) => handleFilter(e)}
          >
            All Newly Promoted Associates
          </Menu.Item>
          <Menu.Item
            id="all"
            active={batchesState.activeFilter === "all"}
            onClick={(e) => handleFilter(e)}
          >
            All Associates
          </Menu.Item>
        </Menu>
        {/* mapping each batch to its own accordion */}
        {batchesState.displayBatches.length > 0
          ? batchesState.displayBatches.map((batch, ind) => {
              return (
                <Accordion styled className="batch-accordion" key={batch.batchID}>
                  <Accordion.Title
                    active={activeIndex === ind}
                    index={ind}
                    onClick={handleClick}
                    className="title"
                  >
                    <Icon name="dropdown" />
                    <span className="info loud">{batch.batchName} &emsp; </span>
                    <span className="trainer info">
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
                    {batchesState.activeFilter === "all" || batchesState.activeFilter === "allNew"? (
                      <span className="info">
                        Staging Manager: {batch.manager}
                      </span>
                    ) : null}
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === ind}>
                    {batch.associates.length > 0
                      ? batch.associates.map((associate) => {
                          return (
                            <DisplayAssociate
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
          : fetching ? <Loader content='Loading' active/> : (<Card>
          <Card.Content>
              No batches to show!
          </Card.Content>
        </Card>)}
      </Container>
    </Container>
  );
};

export default DisplayAssociates;
