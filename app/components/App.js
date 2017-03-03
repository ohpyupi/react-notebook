import React from 'react';

import Nav from './Nav';
import CommentBox from './CommentBox';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1>React: Authentication</h1>
				<Nav/>
				<CommentBox/>
			</div>
		);
	}
}
