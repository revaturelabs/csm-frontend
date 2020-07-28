import React from "react";
import "./SwotQuadrant.scss";
import { useSelector, useDispatch } from "react-redux";
import SwotQuadrantTable from "../SwotQuadrantTable/SwotQuadrantTable";
import SwotNoteModal from "../SwotNoteModal/SwotNoteModal";

/**
 * @param {Object} props The state that has been given to the Swot Quadrant from the Swot Quadrant Table
 * @param {string} props.name This is the name of the section of SWOT Analysis that the Quadrant represents
 */
const SwotQuadrant = (props) => {
  const swotState = useSelector((state) => state.swotReducer);
  const edit = useSelector((state) => state.swotReducer.editable);
  const dispatch = useDispatch();

  /**
   * Tracks that the object being dragged has entered the drop zone
   * @param {Event} event The object being dragged has crossed into the drop zone border, from outside the drop zone,
   *                      OR entered the drop zone from the drop zone border
   * @modifies {number} swotReducer.dropDepth is incremented by 1
   */
  const handleDragEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch({ type: "updateDropDepth", dropDepth: swotState.dropDepth + 1 });
  };

  /**
   * Tracks that the object being dragged has left the drop zone.
   * @param {Event} event The object being dragged has crossed into the drop zone border from the drop zone,
   *                      OR exited the drop zone border into the non-drop zone
   * @modifies {number} swotReducer.dropDepth is decremented by 1
   * @modifies {string} swotReducer.dropZone is cleared out if the dropDepth is less than 1
   */
  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch({ type: "updateDropDepth", dropDepth: swotState.dropDepth - 1 });
    if (swotState.dropDepth > 0) return;
    dispatch({ type: "updateDropZone", dropZone: "" });
  };

  /**
   * Tracks the name of the drop zone the dragged object is currently hovering over
   * @param {Event} event The dragged object is hovering over a drop zone
   */
  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (props.name !== swotState.dropZone) {
      dispatch({ type: "updateDropZone", dropZone: props.name });
    }
  };

  /**
   * Event handler for the dragged object being dropped into the drag zone
   * @param {Event} event The dragged object has been dropped into  the drag zone
   */
  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const data = event.dataTransfer.getData("text");
    const section = data.split("~")[0];
    const category = data.split("~")[1];
    let type = "create";
    if (edit && section !== props.name) {
      if (section !== "NONE") {
        deleteCategory(section);
        type = "move";
      }
      dispatch({ type: "updateMoveType", move: type });
      createModal(category);
    }
  };

  /**
   * Creates the modal for adding the note to a category.
   * If the category is already present in the current SWOT section, pre-populates the
   * modal's note field with the pre-existing comment, allowing the user to edit the current comment
   * rather than creating a new entry on the SWOT section
   * @param {'string'} category The name of the category that has been dragged and dropped into the drag zone
   */
  const createModal = (category) => {
    const exists = swotState.SWOT[props.name].find(
      (element) => element.category === category
    );
    if (exists !== undefined) {
      dispatch({ type: "updateCurrentNote", note: exists.note });
    }
    showNoteModal(category);
  };

  /**
   * Triggers the modal to appear on screen, after createModal has set the state of the note correctly
   * @param {'string'} category The name of the category that has been dragged and dropped into the drag zone
   */
  const showNoteModal = (category) => {
    dispatch({ type: "updateCategory", category: category });
    dispatch({ type: "toggle" + props.name + "Modal", toggle: true });
  };

  /**
   * Deletes the current category from the SWOT section's category list
   * 1. Copies the appropriate SWOT section's array
   * 2. Gets index of category to be removed
   * 3. Slices array at index
   * 4. Dispatches new array
   */
  const deleteCategory = (section, category) => {
    const index = swotState.SWOT[section].findIndex((elt) => {
      return elt.category === category;
    });
    const _type = "update" + section;
    let new_arr = [...swotState.SWOT[section]];
    new_arr.splice(index, 1);
    dispatch({ type: _type, data: new_arr });
  };

  /**
   *
   * The SWOT section has the section's name, as well as the list of the section's categories
   * The section is a droppable area, including the category items already present in the section
   */
  return (
    <>
      <SwotNoteModal name={props.name}></SwotNoteModal>
      <div
        className={"dragDropZone"}
        id={props.name + "Zone"}
        onDrop={(event) => handleDrop(event)}
        onDragOver={(event) => handleDragOver(event)}
        onDragEnter={(event) => handleDragEnter(event)}
        onDragLeave={(event) => handleDragLeave(event)}
      >
        <h3>{props.name}</h3>
        <SwotQuadrantTable
          name={props.name}
          editHandler={createModal}
          deleteHandler={deleteCategory}
        ></SwotQuadrantTable>
      </div>
    </>
  );
};

export default SwotQuadrant;
