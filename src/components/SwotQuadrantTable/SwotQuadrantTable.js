import React from "react";
import { Button, Item } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import SwotCategory from '../SwotCategory/SwotCategory'


const SwotQuadrantTable = (props) => {
    const swotState = useSelector((state) => state.swotReducer);
    const dispatch = useDispatch();
    return (
        <>
            <Item.Group>
                {
                    swotState.SWOT[props.name].map ?
                        swotState.SWOT[props.name].map((item) => {
                            return (
                                <SwotCategory 
                                key={item.category} 
                                category={item.category} 
                                note={item.note} 
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