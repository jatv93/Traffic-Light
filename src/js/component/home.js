import React, { Component } from "react";

export class TrafficLight extends Component {
	constructor() {
		super();

		this.state = {
			redStatus: "red-off",
			yellowStatus: "yellow-off",
			greenStatus: "green-off"
		};
	}

	cambiaColorRed() {
		this.setState({
			redStatus: "red-on",
			yellowStatus: "yellow-off",
			greenStatus: "green-off"
		});
	}

	cambiaColorYellow() {
		this.setState({
			redStatus: "red-off",
			yellowStatus: "yellow-on",
			greenStatus: "green-off"
		});
	}

	cambiaColorGreen() {
		this.setState({
			redStatus: "red-off",
			yellowStatus: "yellow-off",
			greenStatus: "green-on"
		});
	}

	render() {
		return (
			<div className="traffic-light">
				<div
					className={this.state.redStatus}
					onClick={() => {
						this.cambiaColorRed();
					}}
				/>
				<div
					className={this.state.yellowStatus}
					onClick={() => {
						this.cambiaColorYellow();
					}}
				/>
				<div
					className={this.state.greenStatus}
					onClick={() => {
						this.cambiaColorGreen();
					}}
				/>
			</div>
		);
	}
}
