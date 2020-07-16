import React from "react";
import {  useDispatch } from "react-redux";
import { Button, Item, Container } from "semantic-ui-react";
import './SwotCategory.css'

/**
 * 
 * 
 * 
 */

const SwotCategory = props => {
    const dispatch = useDispatch();
    const handlerWrapper = event => {
        event.preventDefault();
        event.stopPropagation();
        // const category = event.target.id.substring(0, event.target.id.length - 4 )
        const _type = 
        // console.log(category)
        dispatch({type: 'updateCategory', category: props.category})
        if (event.target.id === 'edit') {
            props.editHandler(props.category)
        } else {
            props.deleteHandler()
        }
        
    }
    return (
        <Item>
            <Item.Content>
                <Item.Header>{props.category}</Item.Header>
                <Item.Meta>Notes</Item.Meta>
                <Item.Description>
                    <p>
                        {props.note}
                    </p>
                    <br></br>
                    <Button 
                    color='blue'
                    id={'edit'}
                    onClick={handlerWrapper}
                    >
                        Edit
                    </Button>
                    <Button 
                    color='red'
                    id={'delete'}
                    onClick={handlerWrapper}
                    >
                        Delete
                    </Button>
                </Item.Description>
            </Item.Content> 
        </Item>
    )
}

export default SwotCategory;