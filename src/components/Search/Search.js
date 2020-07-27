import React from "react";
import { Input } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";

const Search = (props) => {
<<<<<<< HEAD
		const dispatch = useDispatch();
		const categories = useSelector((state) => state.swotReducer.categories);
		const findPattern = (event) => {
			let elements = [];
			let pattern = event.target.value;
			pattern = pattern.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
			for(const category of categories) {
					if(category.skillCategory.toLowerCase().search(pattern.toLowerCase()) > -1) {
							elements.push(category);
					}
			}
			dispatch({ type: "updateDisplayCategories", getDisplayCategories: elements })
		}
		return (
			<Input id="search" fluid onChange={findPattern} icon="search" placeholder='Search...' />
		)
}
=======
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.swotReducer.categories);
  const findPattern = (event) => {
    let elements = [];
    // let re = /^[^`~!@#$%^&*()_+={}\[\]|\\:;“’<,>.?๐฿]*$/;
    let pattern = event.target.value;
    pattern = pattern.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
    for (const category of categories) {
      if (
        category.toLowerCase().search(pattern.toLowerCase()) > -1
      ) {
        elements.push(category);
      }
    }
    dispatch({
      type: "updateDisplayCategories",
      getDisplayCategories: elements,
    });
  };
  return (
    <Input
      id="search"
      fluid
      onChange={findPattern}
      icon="search"
      placeholder="Search..."
    />
  );
};
>>>>>>> 7ba30ffc46581d1e6d208365e45aca8e74bc14f4

export default Search;
