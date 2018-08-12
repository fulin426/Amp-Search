import { SEARCH_JOBS } from '../actions/types';

const initialState = {
	jobs: {}, 
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
		default: 
			return state;
	}
}