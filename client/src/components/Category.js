import React, { Component } from 'react';
import { connect } from 'react-redux';

class Category extends Component {
	render() {
	const returned = this.props.jobs.returned;
    let Categories;

    if (returned === true) {

    	let items = this.props.jobs.jobs.rss.channel.item
      let placeHolder = ['test', 'test', 'test', 'python'];

      let arry = [];

      items.forEach(item => 
        arry = arry.concat(item.category)
      );

      console.log(arry[0]._text);

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
      
      let slicedSortable = sortable.slice(0,15);
      let sortedItems = [];

      for (let i=0; i<slicedSortable.length; i++) {
        sortedItems.push({text: slicedSortable[i][0] });
      }

      Categories = sortedItems.map((category, index) =>
        <li key={index}>
          {category.text}
        </li>
      );
    }

		return (
			<div>
				<br />
				<h3>Do you have these skills?</h3>
				<ul>
					{Categories}
				</ul>

			</div>
		);
	}
}

const mapStateToProps = state => ({
  jobs: state.jobs
});

export default connect(mapStateToProps)(Category);
