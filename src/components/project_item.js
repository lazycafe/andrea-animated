import React, { Component } from "react";
import * as Animated from "animated/lib/targets/react-dom";

export default class ProjectItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			project: {},
			animate: new Animated.Value(0)
		};
	}
	componentDidMount() {
		if (this.props.projects.length) {
			this._renderProject(this.props.projects);
		}
	}
	componentWillReceiveProps(nextProps) {
		if (!this.props.projects.length && nextProps.projects.length) {
			this._renderProject(nextProps.projects);
		}
	}
	_renderProject(projects) {
		let project = projects.find(p => p.id === this.props.match.params.id);
		if (project) {
			this.setState({ project: project });
			setTimeout(
				() =>
					Animated.spring(this.state.animate, { toValue: 1 }).start(),
				375
			);
		}
	}
	render() {
		const { project: { title, body, tools, link, images, customWidths=[] } } = this.state;
		const goBackStyle = {
			transform: Animated.template`
				translate3d(${this.state.animate.interpolate({
				inputRange: [0, 1],
				outputRange: ["-24px", "0px"]
			})},0,0)
			`,
			opacity: Animated.template`${this.state.animate}`
		};

		return (
			<div className="page project-item">
				<Animated.span style={goBackStyle} className="back-icon">
					<a
						onClick={e => {
							e.preventDefault();
							this.props.history.goBack();
						}}
					>
						←
					</a>
				</Animated.span>
				<h1>{title && title}</h1>
				<div className="project-description-container">
					{body && body}
				</div>
				<div className="project-info">
					{link && <div>{link} <br /></div>}
					{tools && <span>Made with {tools}</span>}
				</div>
				<div className="project-images">
					{ images && images.map((image, i) => {
						return (
							<img key={i} src={image} width={customWidths[i] ? customWidths[i] : ''} className="additional-image" />
						)
					})}
				</div>
			</div>
		);
	}
}
