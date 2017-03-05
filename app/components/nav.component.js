import React from 'react';

export default class Nav extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<nav>
				<a href='/'>Home</a>
				<a href='/auth/login'>Login</a>
				<a>Logout</a>
			</nav>
		);
	}
}
