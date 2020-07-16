import React from "react";
import './SwotQuadrant.css';
import { Button, Modal, Form, TextArea } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import SwotQuadrantTable from '../SwotQuadrantTable/SwotQuadrantTable'


const SwotQuadrant = (props) => {
    const swotState = useSelector((state) => state.swotReducer);
    const dispatch = useDispatch();

    const handleDragEnter = event => {
        event.preventDefault();
        event.stopPropagation();
        dispatch({type: 'updateDropDepth', dropDepth: swotState.dropDepth + 1})
    };
    const handleDragLeave = event => {
        event.preventDefault();
        event.stopPropagation();
        dispatch({type: 'updateDropDepth', dropDepth: swotState.dropDepth - 1})
        if (swotState.dropDepth > 0) return
        dispatch({type: 'updateDropZone', dropZone: ''})
    };
    const handleDragOver = event => {
        event.preventDefault();
        event.stopPropagation();
        dispatch({type: 'updateDropZone', dropZone: props.name})
    }
    const handleDrop = event => {
        event.preventDefault();
        event.stopPropagation();
        const category = event.dataTransfer.getData('text')
        createModal(category)

    }

    const createModal = category => {
        const exists = swotState.SWOT[props.name].find(element =>
            element.category === category
        )
        if (exists === undefined) {
            showNoteModal(category)
        } else {
            dispatch({type: 'updateCurrentNote', note: exists.note})
            showNoteModal(category)
        }
    }

    const showNoteModal = category => {
        dispatch({type: 'updateCategory', category: category})
        dispatch({type: 'toggle' + props.name + 'Modal', toggle: true})
    }

    const updateNote = event => {
        dispatch({type: 'updateCurrentNote', note: event.target.value})
    }

    const close = event => {
        dispatch({type: 'toggle' + props.name + 'Modal', toggle: false})
        dispatch({type: 'updateCurrentNote', note: ''})
        dispatch({type: 'updateCategory', category: ''})
    }

    const setCategory = event => {
        const _type = 'update' + props.name
        let new_arr = [...swotState.SWOT[props.name]]

        const exists = swotState.SWOT[props.name].find(element =>
            element.category === swotState.currentCategory
        )
        if (exists === undefined) {
            new_arr.push({category: swotState.currentCategory, note: swotState.currentNote})
        } else {
            let index = swotState.SWOT[props.name].findIndex(element =>
                element.category === swotState.currentCategory)
            new_arr[index].note = swotState.currentNote
        }
        dispatch({type: _type, data: new_arr})
        close()
    }

    const deleteCategory = () => {
        const _type = 'update' + props.name
        let new_arr = [...swotState.SWOT[props.name]]
        let index = swotState.SWOT[props.name].findIndex(element =>
            element.category === swotState.currentCategory)
        new_arr.splice(index, 1)
        dispatch({type: _type, data: new_arr})
        
    }
    
    return (
        <>
            <Modal
                open={swotState[props.name+'Modal']}
                    
                size='small'
            >    
                <Modal.Header>Add a note for {swotState.currentCategory}</Modal.Header>
                <Modal.Content>
                    <Form>
                        <TextArea placeholder='Add note for selected category'
                        onChange={updateNote}
                        value={swotState.currentNote}/>
                    </Form>
                    <Button color='blue'
                    onClick={setCategory}>
                        Add Note
                    </Button>
                    <Button color='red'
                    onClick={close}>
                        Cancel
                    </Button>
                </Modal.Content>
            </Modal>
            <div className={'dragDropZone'}
            id={props.name + 'Zone'}
            onDrop={event => handleDrop(event)}
            onDragOver={event => handleDragOver(event)}
            onDragEnter={event => handleDragEnter(event)}
            onDragLeave={event => handleDragLeave(event)}
            >
                <h2>{props.name}</h2>
                <SwotQuadrantTable name={props.name} editHandler={createModal} deleteHandler={deleteCategory}></SwotQuadrantTable>

            </div>
        </>
    )
}

export default SwotQuadrant;