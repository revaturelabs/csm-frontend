import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import { useSelector, useDispatch } from "react-redux";

const Search = (props) => {
		const dispatch = useDispatch();
		const categories = useSelector((state) => state.swotReducer.categories);
		const findPattern = (event) => {
<<<<<<< HEAD
			let elements = [];
			let pattern = event.target.value;
			pattern = pattern.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
			for(const category of categories) {
					if(category.skillCategory.toLowerCase().search(pattern.toLowerCase()) > -1) {
							elements.push(category);
					}
			}
			dispatch({ type: "updateDisplayCategories", getDisplayCategories: elements })
=======
				let elements = [];
				// let re = /^[^`~!@#$%^&*()_+={}\[\]|\\:;“’<,>.?๐฿]*$/;
				let pattern = event.target.value;
				pattern = pattern.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
				for(const category of categories) {
						if(category.skillCategory.toLowerCase().search(pattern.toLowerCase()) > -1) {
								elements.push(category);
						}
				}
				dispatch({ type: "updateDisplayCategories", getDisplayCategories: elements })
>>>>>>> d822b9384fbdaefd6e36d4865231188cc2dff18d
		}
		return (
			<Input id="search" fluid onChange={findPattern} icon="search" placeholder='Search...' />
		)
}

export default Search;
