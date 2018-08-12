import { SEARCH_JOBS } from '../actions/types';
import { NEXT_CATEGORY } from '../actions/types';

const initialState = {
	jobs: {},
	return: false,
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
		default: 
			return state;
	}
}