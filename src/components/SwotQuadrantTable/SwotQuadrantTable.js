import React from "react";
import { Item } from "semantic-ui-react";
import { useSelector } from "react-redux";
import SwotCategory from '../SwotCategory/SwotCategory'

/**
 * A wrapper object for the grouping of all categories in a quadrant of the SWOT Analysis. 
 * This component creates a SwotCategory for each category object within the appropriate array
 * in the SWOT object in the store
 * @param {string} props.name The name of the section of the SWOT Analysis this table is constructed within
 *                  Values: Strengths, Weaknesses, Opportunities, Threats
 * @param {CallableFunction} props.editHandler The function to be called when the edit button is clicked. Passed through to SwotCategory
 * @param {CallableFunction} props.deleteHandler The function to be called when the delete button is clicked. Passed through to SwotCategory
 */
const SwotQuadrantTable = (props) => {
    const swotState = useSelector((state) => state.swotReducer);
    
    /**
     * SwotQuadrantTable returns a Semantic UI Item.Group component containing a list of all SwotCategory objects for the
     * appropriate section of the SWOT
     */
    return (
        <>
            <Item.Group>
                {
                    swotState.SWOT[props.name].map ?
                        swotState.SWOT[props.name].map((item, index) => {
                            return (
                                <SwotCategory 
                                key={index} 
                                category={item.category} 
                                note={item.note} 
                                section={props.name}
                                editHandler={props.editHandler} 
                                deleteHandler={props.deleteHandler}
                                ></SwotCategory>

                        )
                        
                    })
                    : <></>
                }
            </Item.Group>        
        </>
    )
}

export default SwotQuadrantTable;