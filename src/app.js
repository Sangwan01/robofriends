import React, { Component } from "react";
import Cardlist from "./Cardlist";
import { robots } from "./robots";
import Searchbox from "./searchbox";
import scroll from "./scroll";


class app extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
	        searchfield:''
		}
	}

componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users').then(response=> {
    	return response.json();
    })

    .then(robots =>
    	{ this.setState({ robots: robots})
});	
}


    onSearchChange = (event) => {
    	this.setState({ searchfield: event.target.value})
    	
    	//console.log(filteredRobots);
    }

	render() {
		const filteredRobots = this.state.robots.filter(robots => {
    		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    	})
    	if (this.state.robots.lenght === 0) {
    		 return <h1>Loading...</h1>
    	} else {
	             return(
		         <div className='tc'>
			     <div className='f3'><h1>Robofriends</h1></div>
			     <Searchbox searchChange={this.onSearchChange} />
			       <scroll>
			          <Cardlist robots={filteredRobots} />
			        </scroll>
		         </div>
		        );
             }
          }
       }
 export default app;
