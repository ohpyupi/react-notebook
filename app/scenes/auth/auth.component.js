import React from 'react';
import {UIRouter} from 'ui-router-react';

import './auth.scss';

export default class Auth extends React.Component {
	constructor() {
		super();
	}
	componentWillMount() {
		this._$stateParams = this.props.resolves.$stateParams;
		this._stateService = this.props.transition.router.stateService;
	}
	_templateLogin() {
		return (
			<div>
				<div>
					<label>Username</label>
					<input type='text' name='username'/>
				</div>
				<div>
					<label>Password</label>
					<input type='password' name='Password'/>
				</div>
				<a href='/auth/signup'>Create an account</a>
			</div>
		);
	}
	_templateSignup() {
		return (
			<div>
				<div>
					<label>Username</label>
					<input type='text' name='username'/>
				</div>
				<div>
					<label>Password</label>
					<input type='password' name='Password'/>
				</div>
				<div>
					<label>Confirm</label>
					<input type='password' name='confirm'/>
				</div>
			</div>
		);
	}
	render() {
		let authName;
		let authTemplate;
		// templating according to auth-type.
		if (this._$stateParams.authType === 'login') {
			authName = 'Login';
			authTemplate = this._templateLogin();
		} else if (this._$stateParams.authType === 'signup') {
			authName = 'Sign up';
			authTemplate = this._templateSignup();
		} else {// invalid auth-type will result in redirection to home.
			this._stateService.go('home');
		}
		return (
			//start of login
			<div className='auth-form'>
				<a href='/'>
					<img src='http://www.linnovate.net/sites/default/files/reactjs.png'/>
				</a>
				<h3>{authName}</h3>
				<form name='AuthForm'>
					{authTemplate}
					<button type='button'>Submit</button>
				</form>
			</div>
			//end of login
		);
	}
}
