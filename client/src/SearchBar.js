import React from "react";

class SearchBar extends React.Component {

	render() {
		return (
          
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
			</div>
		);
	}
}

export default SearchBar;