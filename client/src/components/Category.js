import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nextCategory } from '../actions/actions';
import { addCategory } from '../actions/actions';
import { returnedCategories } from '../actions/actions';
import { setNotAddedCategories } from '../actions/actions';
import { setResults } from '../actions/actions';

import '../index.css';


class Category extends React.Component {  

	nextButton = () => {
		if (this.props.stop < 20) {
		this.props.nextCategory();
		}
	}

  showResults = () => {
    this.props.setNotAddedCategories();
    let listedSkills = this.props.addedCategories;
    this.props.setResults(this.props.jobs.jobs.rss.channel.item, listedSkills);
  }

	addCategory = (e) => {
		this.props.addCategory(e.target.dataset.id);
    this.props.returnedCategories(this.refs.initialList.id.split(','));

    let el = document.querySelector('.Results');
    el.classList.toggle('toggle-selected');
	}
  
	render() {
  let Categories;
  let initialList = [];

  if (this.props.jobs.returned === true && 
    this.props.jobs.jobs.rss.channel['os:totalResults']._text > 0) {

    let items = this.props.jobs.jobs.rss.channel.item;
    let rawResults = [];
    items.forEach(item => 
      rawResults = rawResults.concat(item.category)
    );
    
    //filter for jobs descriptions that are undefined
    let arry = rawResults.filter(item => item !== undefined);
    
    let skillsObj = {};
    for (let i=0; i<arry.length; i++) {
      if (skillsObj[arry[i]._text]) {
        skillsObj[arry[i]._text]++;
      } else {
        skillsObj[arry[i]._text] = 1
      }
    }

    for (let i=0; i<arry.length; i++) {
      if (skillsObj[arry[i]._text]) {
        skillsObj[arry[i]._text]++;
      } else {
      skillsObj[arry[i]._text] = 1
      }
    }

    let sortable = [];
    for (let skill in skillsObj) {
      sortable.push([skill, skillsObj[skill]]);
    }

    sortable.sort(function(a,b) {
    return b[1]-a[1];
    });

    let start = this.props.start;
    let stop = this.props.stop;

    let slicedSortable = sortable.slice(start, stop);

    for (let i=0; i<sortable.slice(0,20).length; i++){
      initialList.push(sortable.slice(0,20)[i][0]);
    }

    let sortedItems = [];
    for (let i=0; i<slicedSortable.length; i++) {
      sortedItems.push({text: slicedSortable[i][0] });
    }

    Categories = sortedItems.map((category, index) =>
      <li 
        key={index} 
      	className="Results"
      	onClick={this.addCategory}
      	data-id={category.text}
      >
        {category.text}
      </li>
    ); 
    return (
			<div>
				<h3 id={initialList} ref="initialList">Do you have these skills?</h3>
				<ul>{Categories}</ul>
				<button 
        onClick={this.nextButton}>
				Next
				</button>
        <button onClick={this.showResults}>
        Show Results
        </button>
			</div>
		);
		} else if (this.props.jobs.returned === true &&
      this.props.jobs.jobs.rss.channel['os:totalResults']._text == 0 ) {
      return(
      <div>
        <p>Did not match any jobs. Please try searching a different location</p>
      </div>);
    } else {
      return(null);
    }
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs,
  start: state.jobs.start,
  stop: state.jobs.stop,
  returned: state.jobs.returned,
  resultSet: state.jobs.resultSet,
  addedCategories: state.jobs.addedCategories
});

export default connect(mapStateToProps, { 
  nextCategory, 
  addCategory, 
  returnedCategories, 
  setNotAddedCategories, 
  setResults 
  })
  (Category);
