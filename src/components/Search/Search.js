import React from 'react'
import { Input, Button } from 'semantic-ui-react'
import { useSelector, useDispatch } from "react-redux";

const Search = (props) => {
		const dispatch = useDispatch();
		const dates = useSelector((state) => state.swotReducer.dates);
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
				<Input id="search" fluid onChange={findPattern} icon="search" placeholder='Search...' />
			</>
		)
}

export default Search
