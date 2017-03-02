import React from 'react';

import Footer from './Footer';
import CommentBox from './CommentBox';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello World</h1>
				<CommentBox/>
				<Footer/>
			</div>
		);
	}
}
