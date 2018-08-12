import { SEARCH_JOBS } from './types';
import { NEXT_CATEGORY } from './types';

import Client from "../Client";

export const searchJobs = (query) => dispatch => {
	console.log(`Searching ${query}`);
	Client.search(query)
    .then(jobs => 
    	dispatch ({
      	type: SEARCH_JOBS,
      	payload: jobs
      }));
}

export const nextCategory = () => dispatch => {
	dispatch({type: NEXT_CATEGORY});
}