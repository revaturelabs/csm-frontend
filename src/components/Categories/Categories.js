import React, { useEffect } from "react";
import { Menu, List, Card } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import Search from "../Search/Search.js";
import categoryService from "../../services/categories.service";

const Categories = (props) => {
  const dispatch = useDispatch();
  const batchTopics = useSelector((state) => state.swotReducer.batchTopics);
  const displayCategories = useSelector(
    (state) => state.swotReducer.displayCategories
  );

  const cat = new categoryService();

  const listDrag = (event) => {
    event.dataTransfer.setData("text", "NONE~" + event.target.id);
  };

  useEffect(() => {
    async function getCat() {
      const resp = await cat.getCategories();
<<<<<<< HEAD
      const otherId = resp.length + 1;
      const lst = [...resp.data, {categoryId: otherId, skillCategory: 'Other', active:'true' }]
      lst.sort();
=======
      let lst = resp.data.map(cat => cat.skillCategory);
      lst.sort();
      let temp = batchTopics.sort().concat(lst);
      let orderedCategories = [...new Set(temp), "Other"];
>>>>>>> 7ba30ffc46581d1e6d208365e45aca8e74bc14f4
      dispatch({
        type: "updateDisplayCategories",
        getDisplayCategories: orderedCategories,
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
            {displayCategories.map((category, i) => (
              <Card key={i} raised={true}>
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
