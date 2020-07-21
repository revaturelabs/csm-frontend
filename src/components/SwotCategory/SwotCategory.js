import React from "react";
import { useDispatch } from "react-redux";
import { Button, Item } from "semantic-ui-react";
import "./SwotCategory.css";

/**
 *  Representation for a single category and it's associated notes in the SWOT Analysis Widget
 * @param {Object} props  The values passed to the component by its parent
 * @param {string} props.category The category being displayed by this SwotCategory Instance
 * @param {string} props.note The note associated with the category
 * @param {CallableFunction} props.editHandler The function to be called when the edit button is clicked
 * @param {CallableFunction} props.deleteHandler The function to be called when the delete button is clicked
 */
const SwotCategory = (props) => {
  const dispatch = useDispatch();

  /**
   * Handles setting the store to contain the current category and calling the appropriate fn
   * Based on the id of the event that has been passed in
   * Functions are passed through props by the SwotQuadrantTable, the parent to this component
   * @param {Event} event The button that was pressed to trigger the method call
   */
  const handlerWrapper = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // Set the store to have the correct category context
    dispatch({ type: "updateCategory", category: props.category });

    // Call the appropriate handler as determined by what button triggered this fn call
    if (event.target.id === "edit") {
      props.editHandler(props.category);
    } else {
      props.deleteHandler(props.key);
    }
  };
  /**
   * A SwotCategory is a wrapper of a Semantic UI Item component.
   * It contains 4 things:
   * 1. The name of the category
   * 2. Notes for the category
   * 3. An Edit button
   * 4. A Delete Button
   */
  return (
    <Item>
      <Item.Content>
        <Item.Header>{props.category}</Item.Header>
        <Item.Meta>Notes</Item.Meta>
        <Item.Description>
          <p>{props.note}</p>
          <br></br>
          <Button color="blue" id={"edit"} onClick={handlerWrapper}>
            Edit
          </Button>
          <Button color="red" id={"delete"} onClick={handlerWrapper}>
            Delete
          </Button>
        </Item.Description>
      </Item.Content>
    </Item>
  );
};

export default SwotCategory;
