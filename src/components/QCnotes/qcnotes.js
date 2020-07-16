import React, { Component } from "react";
import { connect } from 'react-redux';
import { Tab } from 'semantic-ui-react';


const QCNotes = (props) => {
    /*const associatesState = useSelector(state => state.associateReducer);
    const dispatch = useDispatch();
    const history = useHistory();
    const associateService = new AssociateService();*/


    useEffect(() => {
        console.log("useEffect")

        getAssociatesInformation();
    }, []);

    // TODO: Get real manager id
    const testManager = {id: '{managerId}'}

    async function getAssociatesInformation() {
        let resp = await associateService.getAssociatesByManager(testManager.id)
        console.log(resp)
        dispatch({ type: 'updateAssociates', associates: resp.data })
        console.log(associatesState.associates)
    }
    const panes = [
        { menuItem: 'Week 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
        { menuItem: 'Week 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
        { menuItem: 'Week 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
        { menuItem: 'Week 4', render: () => <Tab.Pane>Tab 4 Content</Tab.Pane> },
        { menuItem: 'Week 5', render: () => <Tab.Pane>Tab 5 Content</Tab.Pane> },
        { menuItem: 'Week 6', render: () => <Tab.Pane>Tab 6 Content</Tab.Pane> },
        { menuItem: 'Week 7', render: () => <Tab.Pane>Tab 7 Content</Tab.Pane> },
        { menuItem: 'Week 8', render: () => <Tab.Pane>Tab 8 Content</Tab.Pane> },
        { menuItem: 'Week 9', render: () => <Tab.Pane>Tab 9 Content</Tab.Pane> },
        { menuItem: 'Week 10', render: () => <Tab.Pane>Tab 10 Content</Tab.Pane> },
        
      ]
      
      const TabExampleBasic = () => <Tab panes={panes} />

    return (
        <div>
             
        </div >
    )
}

export default DisplayAssociates;