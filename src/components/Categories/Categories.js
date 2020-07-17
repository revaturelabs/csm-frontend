import React, { useEffect } from "react";
import { Menu, List, Card } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import Search from "../Search/Search.js";

const Categories = (props) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.swotReducer.categories);
  const displayCategories = useSelector(
    (state) => state.swotReducer.displayCategories
  );

  const listDrag = (event) => {
    event.dataTransfer.setData("text", event.target.id);
  };

  useEffect(() => {
    dispatch({
      type: "updateDisplayCategories",
      getDisplayCategories: categories,
    });
  }, [dispatch, categories]);

  return (
    <>
      <Menu style={{ height: "75vh", overflowY: "scroll" }} vertical>
        <Menu.Item>
          <Search />
        </Menu.Item>
        <Menu.Item>
          <List as="ul" style={{ marginLeft: 0 }}>
            {displayCategories.map((category) => (
              <Card key={category} raised={true}>
                <List.Item
                  id={category}
                  name="category"
                  draggable
                  onDragStart={listDrag}
                >
                  {category}
                </List.Item>
              </Card>
            ))}
          </List>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Categories;
