import React from "react";
import './SwotQuadrant.css';
import { Button, Modal, Form, TextArea } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import SwotQuadrantTable from '../SwotQuadrantTable/SwotQuadrantTable'

/**
 * 
 * @param {string} props.name This is the name of the section of SWOT Analysis that the Quadrant represents
 */
const SwotQuadrant = (props) => {
    const swotState = useSelector((state) => state.swotReducer);
    const dispatch = useDispatch();

    /**
     * Tracks that the object being dragged has entered the drop zone
     * @param {Event} event The object being dragged has crossed into the drop zone border, from outside the drop zone, 
     *                      OR entered the drop zone from the drop zone border
     * @modifies {number} swotReducer.dropDepth is incremented by 1
     */
    const handleDragEnter = event => {
        event.preventDefault();
        event.stopPropagation();
        dispatch({type: 'updateDropDepth', dropDepth: swotState.dropDepth + 1})
    };
    /**
     * Tracks that the object being dragged has left the drop zone.
     * @param {Event} event The object being dragged has crossed into the drop zone border from the drop zone, 
     *                      OR exited the drop zone border into the non-drop zone
     * @modifies {number} swotReducer.dropDepth is decremented by 1
     * @modifies {string} swotReducer.dropZone is cleared out if the dropDepth is less than 1
     */
    const handleDragLeave = event => {
        event.preventDefault();
        event.stopPropagation();
        dispatch({type: 'updateDropDepth', dropDepth: swotState.dropDepth - 1})
        if (swotState.dropDepth > 0) return
        dispatch({type: 'updateDropZone', dropZone: ''})
    };
    /**
     * Tracks the name of the drop zone the dragged object is currently hovering over
     * @param {Event} event The dragged object is hovering over a drop zone
     */
    const handleDragOver = event => {
        event.preventDefault();
        event.stopPropagation();
        dispatch({type: 'updateDropZone', dropZone: props.name})
    }

    /**
     * Event handler for the dragged object being dropped into the drag zone
     * @param {Event} event The dragged object has been dropped into  the drag zone
     */
    const handleDrop = event => {
        event.preventDefault();
        event.stopPropagation();
        createModal(event.dataTransfer.getData('text'))
    }

    /**
     * Creates the modal for adding the note to a category.
     * If the category is already present in the current SWOT section, pre-populates the
     * modal's note field with the pre-existing comment, allowing the user to edit the current comment
     * rather than creating a new entry on the SWOT section
     * @param {'string'} category The name of the category that has been dragged and dropped into the drag zone
     */
    const createModal = category => {
        const exists = swotState.SWOT[props.name].find(element =>
            element.category === category
        )
        if (exists !== undefined) {
            dispatch({type: 'updateCurrentNote', note: exists.note})
        } 
        showNoteModal(category)

    }

    /**
     * Triggers the modal to appear on screen, after createModal has set the state of the note correctly
     * @param {'string'} category The name of the category that has been dragged and dropped into the drag zone
     */
    const showNoteModal = category => {
        dispatch({type: 'updateCategory', category: category})
        dispatch({type: 'toggle' + props.name + 'Modal', toggle: true})
    }

    /**
     * Handles dispatching the current note to the store
     * @param {Event} event The note field of the note modal has changed
     */
    const updateNote = event => {
        dispatch({type: 'updateCurrentNote', note: event.target.value})
    }

    /**
     * Cleans up the store and the removes the note modal from the screen,
     * This is done by:
     *  1. Toggling the modal's open value to false
     *  2. Clearing the currentNote field in the store
     *  3. Clearing the currentCategory field in the store
     */
    const close = () => {
        dispatch({type: 'toggle' + props.name + 'Modal', toggle: false})
        dispatch({type: 'updateCurrentNote', note: ''})
        dispatch({type: 'updateCategory', category: ''})
    }

    /**
     * Handles adding the new category to the list of categories in the store
     * 1. Copies the list of categories for the appropriate SWOT section
     * 2. Checks the list for the current category
     *      A. IF NOT PRESENT:
     *          i. Appends category object to list
     *      B. IF PRESENT:
     *          i. Updates category object already present in list with new note
     * 3. Dispatches new array to store to change appropriate SWOT section's array
     * 4. Closes the modal
     */
    const setCategory = () => {
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

    /**
     * Deletes the current category from the SWOT section's category list
     * 1. Copies the appropriate SWOT section's array
     * 2. Gets index of category to be removed
     * 3. Slices array at index
     * 4. Dispatches new array
     */
    const deleteCategory = () => {
        const _type = 'update' + props.name
        let new_arr = [...swotState.SWOT[props.name]]
        let index = swotState.SWOT[props.name].findIndex(element =>
            element.category === swotState.currentCategory)
        new_arr.splice(index, 1)
        dispatch({type: _type, data: new_arr})
        
    }
    
    /**
     * The notes modal is defaulted to being closed.
     * It's title contains the current category, 
     * It's body has the category's note
     * The modal has 2 buttons:
     *  1. Add Note: This adds the category to the given SWOT section, with the current note
     *  2. Cancel: Cancels the operation, leaving the section in it's previous state
     * 
     * The SWOT section has the section's name, as well as the list of the section's categories
     * The section is a droppable area, including the category items already present in the section
     */
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