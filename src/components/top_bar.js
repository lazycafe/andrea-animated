import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {withRouter} from 'react-router-dom';
import { DEFAULT_ENCODING } from "crypto";
const classNames = require('classnames');
const Camera = require('react-icons/lib/ti/camera-outline');
const Mail = require('react-icons/lib/ti/mail');
const BusinessCard = require('react-icons/lib/ti/business-card');
const Briefcase = require('react-icons/lib/ti/briefcase');
const Desktop = require('react-icons/lib/ti/device-desktop');
const Laptop = require('react-icons/lib/ti/device-laptop');
const Paintbrush = require('react-icons/lib/ti/brush');

const CODING_PATH = '/coding';
const DESIGN_PATH = '/design';
const PHOTOGRAPHY_PATH = '/photography';
const ABOUT_PATH = '/about';

export default withRouter(class TopBar extends Component {
	render() {
		const path = this.props.location.pathname;
		return (
			<div className="top-bar">
				<NavLink to={CODING_PATH}><Laptop className={classNames("nav-icon laptop", {'active': path === CODING_PATH })} /></NavLink>
				<NavLink to={DESIGN_PATH}><Paintbrush className={classNames("nav-icon paintbrush", {'active': path === DESIGN_PATH })} /></NavLink>
				<NavLink to={PHOTOGRAPHY_PATH}><Camera className={classNames("nav-icon camera", {'active': path === PHOTOGRAPHY_PATH })} /></NavLink>
				<NavLink to={ABOUT_PATH}><BusinessCard className={classNames("nav-icon businesscard", {'active': path === ABOUT_PATH })} /></NavLink>
			</div>
		)
	}
})