import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import { useSelector, useDispatch } from "react-redux";

const Search = (props) => {
		const dispatch = useDispatch();
		const categories = useSelector((state) => state.swotReducer.categories);
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
		}
		return (
			<>
<<<<<<< HEAD
=======
				{/* Front End - Add Category feature. Button deactivated due to user feedback from Emily EJ Baillie on 21 July 2020.
				 <Button id="createCategory" disabled={disabled} onClick={addCategory} fluid>Create Category</Button>*/}
>>>>>>> 009d1eeedbfba83435d4ae705c02a796293560ff
				<Input id="search" fluid onChange={findPattern} icon="search" placeholder='Search...' />
			</>
		)
}

export default Search;
