import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	return (
	    <div>
		    {
		     robots.map((user ,i) => { //user the details and i for index
					return ( 
					<Card 
						key={i} 
						id={robots[i].id} 
						name={robots[i].name} 
						email={robots[i].email}
						/> //loop for all the robots!
					);
				})
		    }
	    </div>
	);    
}

export default CardList;