import React from 'react'
import { Input } from 'semantic-ui-react'
import { useSelector, useDispatch } from "react-redux";

const Search = (props) => {
		const dispatch = useDispatch();
		const categories = useSelector((state) => state.swotReducer.categories);
		const find = (event) => {
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
				dispatch({type: "updateDisplayCategories", getDisplayCategories: elements})
		}
		return <div className="ui input"><input id="search" name="search" fluid="true" onChange={ find } icon="search" placeholder='Search...' value="" /></div>
}

export default Search
