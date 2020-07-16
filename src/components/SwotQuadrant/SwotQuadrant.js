import React from "react";
import './SwotQuadrant.css';
import { Button, Modal, Form, TextArea } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";


const SwotQuadrant = (props) => {
    const swotState = useSelector((state) => state.swotReducer);
    const dispatch = useDispatch();

    const handleDragEnter = event => {
        event.preventDefault();
        event.stopPropagation();
        dispatch({type: 'update_drop_depth', dropDepth: swotState.dropDepth + 1})
    };
    const handleDragLeave = event => {
        event.preventDefault();
        event.stopPropagation();
        dispatch({type: 'update_drop_depth', dropDepth: swotState.dropDepth - 1})
        if (swotState.dropDepth > 0) return
        dispatch({type: 'update_drop_zone', dropZone: ''})
    };
    const handleDragOver = event => {
        event.preventDefault();
        event.stopPropagation();
        dispatch({type: 'update_drop_zone', dropZone: props.name})
    }
    const handleDrop = event => {
        event.preventDefault();
        event.stopPropagation();
        
        // dispatch({type: _type, data: {category: category, notes: note}})
        console.log(props.name)
        console.log(event.dataTransfer.getData('text'))
        dispatch({type: 'updateCategory', category: event.dataTransfer.getData('text')})
        dispatch({type: 'toggle_' + props.name + '_modal', toggle: true})
    }

    const updateNote = event => {
        dispatch({type: 'updateNote', note: event.target.value})
    }

    const setCategory = event => {
        const _type = 'update_' + props.name
        dispatch({type: _type, data: {category: swotState.current_category, note: swotState.current_note}})
        dispatch({type: 'toggle_' + props.name + '_modal', toggle: false})
        dispatch({type: 'updateNote', note: ''})
        dispatch({type: 'updateCategory', category: ''})
    }
    
    return (
        <>
            <Modal
                open={swotState[props.name+'_modal']}
                    
                size='mini'
            >    
                <Modal.Header>Add a note for {swotState.current_category}</Modal.Header>
                <Modal.Content>
                    <Form>
                        <TextArea placeholder='Add note for selected category'
                        onChange={updateNote}
                        value={swotState.current_note}/>
                    </Form>
                    <Button color='green'
                    onClick={setCategory}>
                        Add Category
                    </Button>
                </Modal.Content>
            </Modal>
            <div className={'drag-drop-zone'}
            id={props.name + '_zone'}
            onDrop={event => handleDrop(event)}
            onDragOver={event => handleDragOver(event)}
            onDragEnter={event => handleDragEnter(event)}
            onDragLeave={event => handleDragLeave(event)}
            >
                <p>Add categories to {props.name}</p>                
            </div>
        </>
    )
}

export default SwotQuadrant;