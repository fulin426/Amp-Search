import { NEXT_CATEGORY } from './types';

export const nextCategory = () => dispatch => {
	console.log('next action fired');
	dispatch({type: NEXT_CATEGORY});
}
