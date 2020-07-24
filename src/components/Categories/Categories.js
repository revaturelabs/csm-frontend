import React, { useEffect } from "react";
import { Menu, List, Card } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import Search from "../Search/Search.js";
import categoryService from "../../services/categories.service";

const Categories = (props) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.swotReducer.categories);
  const displayCategories = useSelector(
    (state) => state.swotReducer.displayCategories
  );

  const cat = new categoryService();

  const listDrag = (event) => {
    event.dataTransfer.setData("text", 'NONE~'+event.target.id);
  };

  useEffect(() => {
    async function getCat() {
      const resp = await cat.getCategories();
      const otherId = resp.length + 1;
      const lst = [...resp.data, {categoryId: otherId, skillCategory: 'Other', active:'true' }]
      lst.sort();
      dispatch({
        type: "updateDisplayCategories",
        getDisplayCategories: lst,
      });
    }
    getCat();
  }, [dispatch]);

  return (
    <>
      <Menu style={{ height: "75vh", overflowY: "scroll" }} vertical fluid>
        <Menu.Item>
          <Search />
        </Menu.Item>
        <Menu.Item>
          <List as="ul" style={{ marginLeft: 0 }}>
            {displayCategories.map((category) => (
              <Card key={category.categoryId} raised={true}>
                <List.Item
                  id={category.skillCategory}
                  name="category"
                  draggable
                  onDragStart={listDrag}
                >
                  {category.skillCategory}
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
