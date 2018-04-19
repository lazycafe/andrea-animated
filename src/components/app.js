import React, { Component } from "react";
import { Route, matchPath, withRouter } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import AnimatedSwitch from "./animated_switch";
import { firstChild } from "../utils/helpers";

import TopBar from "./top_bar";
import Home from "./home";
import Projects from "./projects";
import ProjectItem from "./project_item";
import Missed from "./missed";
import Photography from "./photography";
import About from "./about";

import GhibliThumbnail from './../images/ghibli-thumbnail.png';
import HouseplusThumbnail from './../images/houseplus-thumbnail.png';
import AdobeThumbnail from './../images/adobe-thumbnail.png';
import TealightThumbnail from './../images/tealight-thumbnail.png';
import CirclesThumbnail from './../images/circles-thumbnail.png';
import HouseElvesThumbnail from './../images/houseelves-thumbnail.png';
import GrecThumbnail from './../images/grec-thumbnail.png';
import CupcakeThumbnail from './../images/cupcake-thumbnail.png';
import ChairThumbnail from './../images/chair-thumbnail.png';

import Ghibli1 from './../images/ghibli-1.png';
import Ghibli2 from './../images/ghibli-2.png';
import Ghibli3 from './../images/ghibli-3.png';
import Ghibli4 from './../images/ghibli-4.png';
import HouseElves1 from './../images/houseelves-1.png';
import Houseplus1 from './../images/houseplus-1.png';
import Houseplus2 from './../images/houseplus-2.png';
import Adobe1 from './../images/adobe-1.png';
import Circles1 from './../images/circles-1.png';
import Grec1 from './../images/grec-1.png';
import Grec2 from './../images/grec-2.png';

const DESIGN_PROJECTS = [
	{
		title: 'Studio Ghibli Visual Book',
		body: 'A communication design class project, this comb-bound book features plot descriptions and illustrations from five different Hayao Miyazaki films.',
		id: 'ghibli',
		thumbnail: GhibliThumbnail,
		tools: 'Adobe Illustrator',
		images: [Ghibli4, Ghibli2, Ghibli3, Ghibli1],
		customWidths: ['', '360px', '500px']
	},
	{
		title: 'House+ App Icon',
		body: 'A contracted project, this graphic is the logo and app icon of House+, an award-winning real estate database app created in 2015.',
		id: 'houseplus',
		thumbnail: HouseplusThumbnail,
		tools: 'Adobe Illustrator',
		link: 'https://www.houseplus.tw/',
		images: [Houseplus1, Houseplus2],
		customWidths: ['300px', '300px']
	},
	{
		title: 'Circles',
		body: 'A personal project, this is a sample homepage for a friend\'s social app.',
		id: 'circles',
		thumbnail: CirclesThumbnail,
		tools: 'HTML, CSS, JavaScript, React, and Adobe Illustrator',
		images: [Circles1]
	},
	{
		title: 'Adobe Office Wall Art',
		body: 'A personal project, this was my submission for an internal Adobe contest for new wall art to be featured in the San Francisco office. The theme was inspired by diversity and Adobe office cities.',
		id: 'adobewallpaper',
		thumbnail: AdobeThumbnail,
		tools: 'Adobe Illustrator',
		images: [Adobe1]
	},
	{
		title: 'House Elves - Work in Progress',
		body: 'A personal project, this is a mobile app design for an imaginary app where you can hire house elves to do tasks for you.',
		id: 'houseelves',
		thumbnail: HouseElvesThumbnail,
		tools: 'Adobe XD and Adobe Illustrator',
		images: [HouseElves1]
	},
	{
		title: 'Global Real Estate Conference',
		body: 'I designed the banners, name badges, stage backdrop, laptop bag graphic, and conference guide cover for the 2015 Global Real Estate Conference in Washington, D.C.',
		id: 'grec',
		thumbnail: GrecThumbnail,
		tools: 'Adobe Illustrator',
		images: [Grec1, Grec2],
		customWidths: ['', '400px']
	},
	{
		title: 'Cupcake Illustration',
		body: 'I really like cupcakes!',
		id: 'cupcake',
		thumbnail: CupcakeThumbnail,
		tools: 'Adobe Illustrator',
		images: [CupcakeThumbnail],
		customWidths: ['250px']
	},
	{
		title: 'Tea Light Holder',
		body: 'An industrial design class project, this handmade tea light holder is completely made of paper. Iterated and prototyped before arriving at this final design.',
		id: 'tealight',
		thumbnail: TealightThumbnail,
		tools: 'paper',
		images: [TealightThumbnail],
		customWidths: ['400px']
	},
	{
		title: 'Cardboard Chair',
		body: 'For our industrial design final class project, we researched form and uses of chairs, prototyped a design, and constructed our own chair that is able to hold a person\'s weight.',
		id: 'chair',
		thumbnail: ChairThumbnail,
		tools: 'cardboard and utility knife. No adhesives used.',
		images: [ChairThumbnail],
		customWidths: ['500px']
	}
];

import AdcaThumbnail from './../images/adca-thumbnail.png';
import CmThumbnail from './../images/cm-thumbnail.png';
import GrumblrThumbnail from './../images/grumblr-thumbnail.png';

import Adca1 from './../images/adca-1.png';
import Cm1 from './../images/cm-1.png';
import Grumblr1 from './../images/grumblr-1.png';
import Grumblr2 from './../images/grumblr-2.png';
import Grumblr3 from './../images/grumblr-3.png';
import Grumblr4 from './../images/grumblr-4.png';
import Grumblr5 from './../images/grumblr-5.png';

const CODING_PROJECTS = [
	{
		title: 'Anomaly Detection and Contribution Analysis in Analysis Workspace',
		body: 'A work project, Anomaly Detection allows users to automatically detect anomalies in their data. Contribution Analysis provides a panel of visualizations that use machine learning to explain the factors that contributed to the data trends.',
		id: 'adca',
		thumbnail: AdcaThumbnail,
		tools: 'HTML, CSS, JavaScript, and D3',
		link: 'https://youtu.be/krXyQCjXoeU, https://youtu.be/MbpeJIADtGk',
		images: [Adca1],
	},
	{
		title: 'Component Managers',
		body: 'A work project, component managers allow users to manage their assets inside of Adobe Analytics.',
		id: 'componentmanager',
		thumbnail: CmThumbnail,
		tools: 'HTML, CSS, JavaScript, and React',
		link: 'https://youtu.be/x-yP4ZqCIs8',
		images: [Cm1]
	},
	{
		title: 'grumblr',
		body: 'grumblr is a social networking web application that includes user registration and authentication, email integration for user verification, photo upload and sharing, search, and quasirealtime updates.',
		id: 'grumblr',
		thumbnail: GrumblrThumbnail,
		tools: 'HTML, CSS, Bootstrap, and Django (Python)',
		images: [Grumblr3, Grumblr4, Grumblr5, Grumblr1, Grumblr2]
	}
];

const ALL_PROJECTS = DESIGN_PROJECTS.concat(CODING_PROJECTS);

export default withRouter(class App extends Component {
	render() {
		const path = this.props.location.pathname;
		return (
			<div className="wrapper">
				{ path !== '/' && <div className="nav-on-top"><TopBar /></div> }
				<Route
					render={({ location }) => (
						<TransitionGroup component="main">
							<AnimatedSwitch
								key={location.key}
								location={location}
							>
								<Route exact path="/" component={Home} />
								<Route exact path="/photography" component={Photography} />
								<Route exact path="/about" component={About} />
								<Route
									exact
									path="/design"
									render={props => (
										<Projects {...props} projects={DESIGN_PROJECTS} title="Design" />
									)}
								/>
								<Route
									path="/projects/:id"
									render={props => (
										<ProjectItem {...props} projects={ALL_PROJECTS} />
									)}
								/>
								<Route
									exact
									path="/coding"
									render={props => (
										<Projects {...props} projects={CODING_PROJECTS} title="Coding" />
									)}
								/>
								<Route component={Missed} />
							</AnimatedSwitch>
						</TransitionGroup>
					)}
				/>
			</div>
		);
	}
})
