import { SEARCH_JOBS } from './types';
import { NEXT_CATEGORY } from './types';
import { ADD_CATEGORY } from './types';
import { SET_RETURNED_CATEGORIES } from './types';
import { DELETE_CATEGORY } from './types';
import { SET_NOTADDED_CATEGORIES } from './types';
import { DELETE_NOTADDED_CATEGORY } from './types';
import { SET_RESULTS } from './types';


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
	dispatch({
		type: NEXT_CATEGORY
	});
}

export const addCategory = (category) => dispatch => {
	dispatch({
		type: ADD_CATEGORY,
		newCategory: category
	});
}

export const deleteCategory = (category) => dispatch => {
	dispatch({
		type: DELETE_CATEGORY,
		deleteCategory: category
	});
}

export const returnedCategories = (category) => dispatch => {
	dispatch({
		type: SET_RETURNED_CATEGORIES,
		returnedCategories: category
	});
}

export const setNotAddedCategories = (category) => dispatch => {
	dispatch({
		type: SET_NOTADDED_CATEGORIES,
		setNotAdded: category
	});
}

export const deleteNotAddedCategory = (category) => dispatch => {
	dispatch({
		type: DELETE_NOTADDED_CATEGORY,
		deleteNotAdded: category
	});
}

export const setResults = (jobs, mySkills) => dispatch => {
	
	const currentState = jobs[2].category;
	const matchedSkills = [];

	const sortPercentage = (currentState, mySkills) => {
		let listedSkills = [];
		for (let i=0; i<currentState.length; i++) {
			listedSkills = listedSkills.concat(currentState[i]._text);
		}
    let matchedSkills =[];
    listedSkills.forEach(skill => {
  		if(mySkills.indexOf(skill)>=0)	{
   			matchedSkills.push(skill);
  		}
		});
    return (matchedSkills.length/currentState.length)*100;
	}
	console.log(currentState);
	console.log(sortPercentage(currentState, mySkills));
	
	const sortCategory = (currentState) => {
		let listedSkills = [];
		for (let i=0; i<currentState.length; i++) {
			listedSkills = listedSkills.concat(currentState[i]._text);
		}
    return listedSkills.toString().split(',').join(', ');
	}
	
	const sortedJobs = []
	jobs.forEach(item =>
		sortedJobs.push({ 
			title: item.title._text,
			link: item.link._text,
			location: item.location._text,
			category: sortCategory(item.category),
			percentage: sortPercentage(item.category, mySkills)
		}));

	dispatch({
		type: SET_RESULTS,
		setResults: sortedJobs
	});
}
