import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nextCategory } from '../actions/actions';
import { addCategory } from '../actions/actions';
import '../index.css';

class Category extends React.Component {  

	nextButton = () => {
		if (this.props.stop < 20){
		this.props.nextCategory();
		}
	}

	addCategory = (e) => {
		this.props.addCategory(e.target.dataset.id);
	}

	render() {
	const returned = this.props.jobs.returned;
  let Categories;

  if (returned === true) {
  	let items = this.props.jobs.jobs.rss.channel.item
    let arry = [];
    items.forEach(item => 
      arry = arry.concat(item.category)
    );
    /*San Mateo location cannot read of undefined*/
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
    let sortedItems = [];
    for (let i=0; i<slicedSortable.length; i++) {
      sortedItems.push({text: slicedSortable[i][0] });
    }

    Categories = sortedItems.map((category, index) =>
      <li key={index} 
      	className="SearchResults"
      	onClick={this.addCategory}
      	data-id= {category.text}
      >
        {category.text}
      </li>
    );
  }
  
  if (this.props.returned) { 
		return (
			<div>
				<br />
				<h3>Do you have these skills?</h3>
				<ul>
					{Categories}
				</ul>
				<button onClick={this.nextButton}>
				Next
				</button>
			</div>
		);
	} else {
		return(
			<div></div>
			);
		}
	}
}

const mapStateToProps = state => ({
  jobs: state.jobs,
  start: state.jobs.start,
  stop: state.jobs.stop,
  returned: state.jobs.returned
});

export default connect(mapStateToProps, { nextCategory, addCategory })(Category);
