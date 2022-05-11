import React from "react";

const searchbox = ({searchfeild, searchChange}) => {
	return(
		<div className= 'pa3'>
           <input 
           className='ba b--green bg-lightest-blue'
           type='search'
            placeholder='Find Your Buddy'
            onChange= {searchChange}/>
           </div>
		);
}
export default searchbox;