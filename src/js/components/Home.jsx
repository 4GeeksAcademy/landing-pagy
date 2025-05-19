import React from "react";
import Footer from "../components/Footer";


//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="ps-5 pe-5 d-flex justify-content-center row align-items-center">
		<div className="text-start pb-5 bg-secondary bg-opacity-25 ps-4">
            

			<h1 className="text-start mt-5">A Warm Welcome!</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, voluptatibus debitis commodi voluptate optio quod consequuntur dolorum totam laborum inventore nihil cumque laudantium iste. Consequatur voluptatum ducimus hic repellat libero.
			</p>
			<a href="#" className="btn btn-primary">
				Call to action.
			</a>
			
		</div>
		<Footer />
		</div>
		
	);
};


export default Home;