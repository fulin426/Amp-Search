import { SEARCH_JOBS } from './types';
import Client from "../Client";

/*export function searchJobs() {
	return function(dispatch) {
		console.log('searching');
		let query = 'san jose';
		Client.search(query)
			.then(res=> res.json())
    	.then(jobs => 
    	dispatch ({
      	type: SEARCH_JOBS,
      	payload: jobs
      }));
}	
*/
export const searchJobs = (query) => dispatch => {
	console.log(`Searching ${query}`);
	Client.search(query)
    .then(jobs => 
    	dispatch ({
      	type: SEARCH_JOBS,
      	payload: jobs
      }));
}	