import React from 'react'
import { Input } from 'semantic-ui-react'
import { useSelector, useDispatch } from "react-redux";

const InputExampleInput = (props) => {
		const dispatch = useDispatch();
		const categories = useSelector((state) => state.swotReducer.categories);
		const find = () => {
				console.log('searching');
				let category = '';
				let ele = [];
				// let re = /^[^`~!@#$%^&*()_+={}\[\]|\\:;“’<,>.?๐฿]*$/;
				let pattern = document.getElementById('search').value;
				pattern = pattern.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
				for (category of categories) {
						if(category.toLowerCase().search(pattern.toLowerCase()) > -1) {
								ele.push(category);
						}
				}
				dispatch({type: "updateDisplayCategories", getDisplayCategories: ele})
		}
		return  <Input id="search" fluid onChange={find} icon="search" placeholder='Search...' />
}

export default InputExampleInput
