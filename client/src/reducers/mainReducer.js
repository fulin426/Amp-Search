import { SEARCH_JOBS } from '../actions/types';
import { NEXT_CATEGORY } from '../actions/types';
import { ADD_CATEGORY } from '../actions/types';
import { SET_RETURNED_CATEGORIES } from '../actions/types';

const initialState = {
	jobs: {},
	addedCategories: [],
	NotAddedCategories: [], 
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
		case SET_RETURNED_CATEGORIES:
			return {
				...state,
				NotAddedCategories: action.NotAddedCategories,
			};	
		case ADD_CATEGORY:
			const check = (category, arry) => {
				if (arry.includes(category) === true) {
					return arry;
				} else {
				return arry.concat(category);
				}
			}
			const arry = state.addedCategories;
			const category = action.newCategory;
			
			return {
				...state,
				addedCategories: check(category, arry),
			};
		default: 
			return state;
	}
}