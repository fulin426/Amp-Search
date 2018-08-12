import { NEXT_CATEGORY } from '../actions/types';

const initialState = {
	start: 0,
	stop: 5 
}

export default function(state = initialState, action) {
	switch(action.type) {
		case NEXT_CATEGORY:
			console.log('next was hit');
			return {
				start: state.jobs.start + 5,
				stop: state.jobs.stop + 5
			};
		default: 
			return state;
	}
}
