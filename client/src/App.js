import React from "react";
import Client from "./Client";
import Category from "./components/Category";
/*import SearchBar from "./SearchBar";*/

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {  returned:false };
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  componentWillMount() {
    let query = 'San Jose';
    Client.search(query, jobs => {     
      let items = jobs.rss.channel.item;

      let arry = []
      items.forEach(item => 
        arry = arry.concat(item.category)
      );

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
        sortedItems.push({_text: slicedSortable[i][0] });
      }

      console.log(sortedItems);

      this.setState({
        jobs: jobs,
        items: sortedItems,
        returned: true
        });
      });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    let query = this.refs.zipcode.value;
    Client.search(query, jobs => {
      this.setState({
        jobs: jobs,
        returned: true
      });
    });
  };

  render() {
    const returned = this.state.returned;
    let Categories;

    if (returned === true) {
      Categories = this.state.items.map((category, index) =>
        <li key={index}>
          <Category {...category} />
        </li>
      );
    }

    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input
              placeholder='Enter Zipcode'
              ref='zipcode'
            />
            <input 
              type="submit" 
              value="Search" 
            />
          </form>
          <div>
            <ul>{Categories}</ul>
          </div>
        </div>
    );
  }
}

export default App;