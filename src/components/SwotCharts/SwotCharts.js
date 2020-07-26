import React from "react";
import { Accordion, Grid, Header, Icon } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import Evaluations from "../compomemts/evaluations.js"

const SwotCharts = (props) => {
    const dispatch = useDispatch();
    const chartState = useSelector((state) => state.swotReducer.swotCharts)

    const handleClick = () => {
        if (chartState === true) {
            closeSWOTCharts()
        }
        else {
            showSWOTCharts()
        }
    }   
    const showSWOTCharts = () => {
        /**
         * @todo dispatch to get charts
         */
        dispatch({type: 'toggleSwotCharts', toggle: true})
    }
    const closeSWOTCharts = () => {
        /**
         * @todo dispatch to remove charts
         */
        dispatch({type: 'toggleSwotCharts', toggle: false})
    }

    return (
        <>
            <Accordion
            active={chartState}
            >
                <Accordion.Title
                active={chartState}
                onClick={handleClick}
                >
                    <Icon name='dropdown' />
                    Additional Associate Information
                </Accordion.Title>
                <Accordion.Content
                active={chartState}
                >
                    <Grid columns={2} divided>
                        <Grid.Column>
                            <Header>Spider Chart</Header>
                            <Evaluations associate={currentAssociate}/>
                            {/* Justin is getting the currentAssociate  */}
                        </Grid.Column>
                    </Grid>
                </Accordion.Content>
            </Accordion>
        </>
    );
};

export default SwotCharts;