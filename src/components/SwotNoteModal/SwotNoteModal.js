import React from "react";
import { Button, Modal, Form, TextArea } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";

/**
 * The SwotNoteModal is the modal that allows a user to add a note to 
 *  a particular category
 * @param {Object} props The values passed to the SwotNoteModal by the SwotQuadrant
 * @param {string} props.name The name of the SWOT section
 */
const SwotNoteModal = (props) => {
    const swotState = useSelector((state) => state.swotReducer);
    const dispatch = useDispatch();

    /**
    * Handles dispatching the current note to the store
    * @param {Event} event The note field of the note modal has changed
    */
    const updateNote = (event) => {
        dispatch({ type: "updateCurrentNote", note: event.target.value });
    };

    /**
    * Cleans up the store and the removes the note modal from the screen,
    * This is done by:
    *  1. Toggling the modal's open value to false
    *  2. Clearing the currentNote field in the store
    *  3. Clearing the currentCategory field in the store
    */
    const close = () => {
        dispatch({ type: "toggle" + props.name + "Modal", toggle: false });
        dispatch({ type: "updateCurrentNote", note: "" });
        dispatch({ type: "updateCategory", category: "" });
    };

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
        const _type = "update" + props.name;
        let new_arr = [...swotState.SWOT[props.name]];

        const exists = swotState.SWOT[props.name].find(
            (element) => element.category === swotState.currentCategory
        );

        if (exists === undefined) {
            new_arr.push({
                category: swotState.currentCategory,
                note: swotState.currentNote,
        });
        } else {
            let index = swotState.SWOT[props.name].findIndex(
                (element) => element.category === swotState.currentCategory
            );
            new_arr[index].note = swotState.currentNote;
        }

        dispatch({ type: _type, data: new_arr });
        close();
    };

    /**
    * The notes modal is defaulted to being closed.
    * It's title contains the current category,
    * It's body has the category's note
    * The modal has 2 buttons:
    *  1. Add Note: This adds the category to the given SWOT section, with the current note
    *  2. Cancel: Cancels the operation, leaving the section in it's previous state
    */
    return (
        <>
            <Modal open={swotState[props.name + "Modal"]} size="small">
                <Modal.Header>Add a note for {swotState.currentCategory}</Modal.Header>
                <Modal.Content>
                    <Form>
                        <TextArea
                        placeholder="Add note for selected category"
                        onChange={updateNote}
                        value={swotState.currentNote}
                        />
                    </Form>
                    <Button color="blue" onClick={setCategory}>
                        Add Note
                    </Button>
                    <Button color="red" onClick={close}>
                        Cancel
                    </Button>
                </Modal.Content>
            </Modal>
        </>
    )
}
export default SwotNoteModal;