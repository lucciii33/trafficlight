import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red");
	return (
		<div className="traffic-light">
			<div
				className={color == "green" ? "glow-green" : "green"}
				onClick={() => setColor("red")}></div>
			<div
				className={color == "yellow" ? "glow-yellow" : "yellow"}
				onClick={() => setColor("green")}></div>
			<div
				className={color == "red" ? "glow-red" : "red"}
				onClick={() => setColor("yellow")}></div>
		</div>
	);
};

export default Home;
