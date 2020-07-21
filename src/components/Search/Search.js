import React from 'react'
import { Input, Button } from 'semantic-ui-react'
import { useSelector, useDispatch } from "react-redux";

const Search = (props) => {
		const dispatch = useDispatch();
		const categories = useSelector((state) => state.swotReducer.categories);
		// Front End - New Category feature. Reducer deactivated due to user feedback from Emily EJ Baillie on 21 July 2020.
		// let disabled = useSelector((state) => state.swotReducer.disabled);
		// let newCategory = useSelector((state) => state.swotReducer.newCategory);
		const findPattern = (event) => {
				let category = '';
				let elements = [];
				// let re = /^[^`~!@#$%^&*()_+={}\[\]|\\:;“’<,>.?๐฿]*$/;
				let pattern = event.target.value;
				pattern = pattern.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
				for (category of categories) {
						if(category.toLowerCase().search(pattern.toLowerCase()) > -1) {
								elements.push(category);
						}
				}
				// Front End - Add Category feature. Logic deactivated due to user feedback from Emily EJ Baillie on 21 July 2020.
				// if(elements.length > 0) {
				// 	disabled = true;
				// 	dispatch({type: "updateDisabledField", getDisabledField: disabled});
				// }
				// else {
				// 	disabled = false;
				// 	dispatch({type: "updateDisabledField", getDisabledField: disabled});
				// 	newCategory = event.target.value
				// 	dispatch({type: "updateNewCategory", getNewCategory: newCategory});
				// }
				// dispatch({type: "updateDisplayCategories", getDisplayCategories: elements});
		}
		// Front End - Add Category feature. Function deactivated due to user feedback from Emily EJ Baillie on 21 July 2020.
		// const addCategory = (event) => {
		// 	categories.push(newCategory);
		// 	dispatch({type: "updateDisplayCategories", getDisplayCategories: categories});
		// }
		return (
			<>
				// Front End - Add Category feature. Button deactivated due to user feedback from Emily EJ Baillie on 21 July 2020.
				// <Button id="createCategory" disabled={disabled} onClick={addCategory} fluid>Create Category</Button>
				<Input id="search" fluid onChange={findPattern} icon="search" placeholder='Search...' />
			</>
		)
}

export default Search
