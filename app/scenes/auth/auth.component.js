import React from 'react';
import {UIRouter} from 'ui-router-react';
import axios from 'axios';

import Login from './login.component';
import Signup from './signup.component';

import HFunc from '../../hFunc'
import './auth.scss';

export default class Auth extends React.Component {
	constructor() {
		super();
		this.state = {
			user: {
				username: '',
				password: '',
				confirm: '',
			},
			error: {
				username: '',
				password: '',
			},
		};
		this.hFunc = new HFunc();
	}
	componentWillMount() {
		this._$stateParams = this.props.resolves.$stateParams;
		this._stateService = this.props.transition.router.stateService;
	}
	handleSubmit(e) {
		e.preventDefault();
		const user = Object.assign({}, this.state.user);
		if (!this.validate(user)) {
			return;
		} else {
			axios.post('/api/users/signup', user);
		}
	}
	handleInputChange(e) {
		let name = e.target.name;
		let value = e.target.value;
		const user = this.state.user;
		user[name] = value;
		this.setState({user});
	}
	validate(user) {
		if (!user.username) {
			this.setState({error: {username: "Username is required."}});
			return false;
		} else if (!this.hFunc.isEmail(user.username)) {
			this.setState({error: {username: "Username must be email."}});
			return false;
		} else if (!user.password) {
			this.setState({error: {password: "Password is required."}});
			return false;
		} else if (!this.hFunc.isPassword(user.password, user.confirm)) {
			this.setState({error: {password: "Passwords must match and be at least 8 letters."}});
			return false;
		} else {
			this.setState({error: {}});
			return true;
		}
	}
	render() {
		let authName;
		let authTemplate;
		// templating according to auth-type.
		if (this._$stateParams.authType === 'login') {
			authName = 'Login';
			authTemplate = <Login/>;
		} else if (this._$stateParams.authType === 'signup') {
			authName = 'Sign up';
			authTemplate = <Signup user={this.state.user} error={this.state.error} handleInputChange={e=>{this.handleInputChange(e)}}/>;
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
				<form name='AuthForm' noValidate onSubmit={(e)=>{this.handleSubmit(e)}}>
					{authTemplate}
					<div>
						<button type='submit'>Submit</button>
					</div>
				</form>
			</div>
			//end of login
		);
	}
}
