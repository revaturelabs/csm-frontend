import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import { useSelector, useDispatch } from "react-redux";

const Search = (props) => {
		const dispatch = useDispatch();
		const categories = useSelector((state) => state.swotReducer.categories);
		const findPattern = (event) => {
				let elements = [];
				// let re = /^[^`~!@#$%^&*()_+={}\[\]|\\:;“’<,>.?๐฿]*$/;
				let pattern = event.target.value;
				pattern = pattern.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
<<<<<<< HEAD
				for (category of categories) {
						if(category.skillCategory.toLowerCase().search(pattern.skillCategory.toLowerCase()) > -1) {
								elements.push(category);
						}
				}
			dispatch({type: 'updateDisplayCategories', updateDisplayCategories: elements})
=======
				for(const category of categories) {
						if(category.skillCategory.toLowerCase().search(pattern.toLowerCase()) > -1) {
								elements.push(category);
						}
				}
				dispatch({ type: "updateDisplayCategories", getDisplayCategories: elements })
>>>>>>> 5f04a5a173918847eddf2ea1f4b3ce3999f13547
		}
		return (
			<Input id="search" fluid onChange={findPattern} icon="search" placeholder='Search...' />
		)
}

export default Search;
