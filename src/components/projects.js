import React, { Component } from "react";
import { Link } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import * as Animated from "animated/lib/targets/react-dom";

export default class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [],
			animations: []
		};
	}
	componentDidMount() {
		this._renderProjects(this.props.projects);
	}
	componentWillReceiveProps(nextProps) {
		if (!this.props.projects.length && nextProps.projects.length) {
			this._renderProjects(nextProps.projects);
		}
	}
	_renderProjects(projects) {
		this.setState(
			{
				projects: projects,
				animations: projects.map((_, i) => new Animated.Value(0))
			},
			() => {
				Animated.stagger(
					200,
					this.state.animations.map(anim =>
						Animated.spring(anim, { toValue: 1 })
					)
				).start();
			}
		);
	}

	render() {
		return (
			<div className="page projects">
				<h1>{this.props.title}</h1>
				<div className="project-list-container">
					<TransitionGroup className="project-list">
						{this.state.projects.map((p, i) => {
							const style = {
								opacity: this.state.animations[i],
								transform: Animated.template`
									translate3d(0,${this.state.animations[i].interpolate({
									inputRange: [0, 1],
									outputRange: ["12px", "0px"]
								})},0)
								`
							};
							return (
								<div key={i}>
									<Animated.div style={style}>
										<Link to={`/projects/${p.id}`}>
											<img src={p.thumbnail} className="thumbnail-image" />
										</Link>
									</Animated.div>
								</div>
							);
						})}
					</TransitionGroup>
				</div>
			</div>
		);
	}
}
