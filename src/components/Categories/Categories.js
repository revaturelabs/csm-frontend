import React, { useEffect } from "react";
import { Menu } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import Search from "../Search/Search.js";
import categoryService from "../../services/categories.service";
import './Categories.scss';

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
      let lst = resp.data.map((cat) => cat.skillCategory);
      lst.sort();
      let temp = batchTopics.sort().concat(lst);
      let orderedCategories = [...new Set(temp), "Other"];
      dispatch({
        type: "updateDisplayCategories",
        getDisplayCategories: orderedCategories,
      });
    }
    getCat();
  }, []);

  return (
    <>
      <Menu id="categories" vertical fluid>
        <Menu.Item className="swot-category-search">
          <Search />
        </Menu.Item>
        {displayCategories.map((category, i) => (
          <Menu.Item
            key={i}
            id={category}
            name="category"
            draggable
            onDragStart={listDrag}
          >
            {category}
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
};

export default Categories;
