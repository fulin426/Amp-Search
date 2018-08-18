import { SEARCH_JOBS } from '../actions/types';
import { NEXT_CATEGORY } from '../actions/types';
import { ADD_CATEGORY } from '../actions/types';
import { SET_RETURNED_CATEGORIES } from '../actions/types';
import { DELETE_CATEGORY } from '../actions/types';
import { SET_NOTADDED_CATEGORIES } from '../actions/types';
import { DELETE_NOTADDED_CATEGORY } from '../actions/types';
import { SET_RESULTS } from '../actions/types';

const initialState = {
	jobs: {},
	returnedCategories: [],
	addedCategories: [],
	NotAddedCategories: [],
	setResults: [],
	resultSet: false,
	returned: false,
	start: 0, 
	stop: 0
}

export default function(state = initialState, action) {
	switch(action.type) {
		case SEARCH_JOBS:
			return {
				...state,
				jobs: action.payload,
				returned: true,
				start: 0,
				stop: 5
			}
		case NEXT_CATEGORY:
			return {
				...state,
				start: state.start + 5,
				stop: state.stop + 5
			};
		case SET_NOTADDED_CATEGORIES:
			let addedArry = state.returnedCategories;
			let toRemove = state.addedCategories;
			return {
				...state,
				NotAddedCategories: addedArry.filter(item => !toRemove.includes(item)),
			};		
		case SET_RETURNED_CATEGORIES:
			return {
				...state,
				returnedCategories: action.returnedCategories,
			};	
		case ADD_CATEGORY:
			const check = (category, arry) => {
				if (arry.includes(category) === true) {
					return arry;
				} else {
				return arry.concat(category);
				}
			}
			let arry = state.addedCategories;
			let category = action.newCategory;
			return {
				...state,
				addedCategories: check(category, arry),
			};
		case DELETE_CATEGORY:
			return {
				...state,
				addedCategories: state.addedCategories.filter(item => item !== action.deleteCategory),
			};
		case DELETE_NOTADDED_CATEGORY:
			return {
				...state,
				NotAddedCategories: state.NotAddedCategories.filter(item => item !== action.deleteNotAdded),
			};	
		case SET_RESULTS:
			return {
				...state,
				returned: false,
				resultSet: true,
				setResults: action.setResults
			};				
		default: 
			return state;
	}
}