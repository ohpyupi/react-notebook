import React from 'react';

import Nav from '../components/nav.component';
import CommentBox from '../components/comment-box.component';

export default class Home extends React.Component {
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
