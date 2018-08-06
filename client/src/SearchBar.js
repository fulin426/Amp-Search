import React, { Component } from "react";

class SearchBar extends Component {
	
	onInputChange(e) {
/*		console.log(e.target.value);*/
	}

	render() {
		return (
			<div>
				<input 
					onChange={this.onInputChange}
					placeholder='Zipcode'
				/>
			</div>
		);
	}
}

export default SearchBar;