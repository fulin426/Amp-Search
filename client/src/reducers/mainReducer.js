import { SEARCH_JOBS } from '../actions/types';
import { NEXT_CATEGORY } from '../actions/types';
import { ADD_CATEGORY } from '../actions/types';

const initialState = {
	jobs: {},
	addedCategories: [],
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
		case ADD_CATEGORY:
			return {
				...state,
				addedCategories: state.addedCategories.concat(action.new_category),
			};
		default: 
			return state;
	}
}