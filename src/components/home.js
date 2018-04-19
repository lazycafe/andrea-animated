import React, { Component } from "react";
import TopBar from "./top_bar";

export default class Home extends Component {
	render() {
		return (
			<div className="home">
				<div>
					<div className="andrea-title" id="andrealized">andrealized</div>
					<div className="andrea-subtitle">andrea yang</div>
					<br />
				</div>
				<div>
					<TopBar />
				</div>
			</div>
		);
	}
}
