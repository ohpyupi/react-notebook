import React from 'react';
import {UIRouter} from 'ui-router-react';
import axios from 'axios';

import Login from './login.component';
import Signup from './signup.component';

import hFunc from '../../hFunc'
import './auth.scss';

import ErrorHandler from '../../services/error.service';

export default class Auth extends React.Component {
	constructor() {
		super();
		this.viewState = '';
		this.state = {
			user: {
				username: '',
				password: '',
				confirm: '',
			},
			error: {
				username: '',
				password: '',
				confirm: '',
			},
		};
	}
	componentWillMount() {
		this._$stateParams = this.props.resolves.$stateParams;
		this._stateService = this.props.transition.router.stateService;
		this._error = new ErrorHandler(this._stateService);
	}
	handleSignup(e) {
		let vm = this;
		e.preventDefault();
		let user = Object.assign({}, vm.state.user);
		if (!vm.validateUsername(user) || !vm.validatePassword(user) || !vm.validateMatch(user)) {
			return;
		} else {
			vm.setState({error: {username: '', password: '', confirm: ''}});
			axios.post('/api/users/signup', user).then(res=>{
				alert(res.data);
			}).catch(err=>{
				alert(err.data.message);
			});
		}
	}
	handleLogin(e) {
		let vm = this;
		e.preventDefault();
		let user = Object.assign({}, vm.state.user);
		if (!vm.validateUsername(user) || !vm.validatePassword(user)) {
			return;
		} else {
			vm.setState({error: {username: '', password: '', confirm: ''}});
			axios.post('/api/users/login', user).then(res=>{
				vm._error.flash(res.data.message, 'home');
				/*
				let token = res.data.token;
				var payload = JSON.parse(window.atob(token.split('.')[1]));
				*/
			}).catch(err=>{
				console.log(err.response.data);
			});
		}
	}
	handleInputChange(e) {
		let name = e.target.name;
		let value = e.target.value;
		const user = this.state.user;
		user[name] = value;
		this.setState({user});
	}
	validateUsername(user) {
		let vm = this;
		if (!user.username) {
			vm.setState({error: {username: 'Username is required.'}});
			return false;
		} else if (!hFunc.isEmail(user.username)) {
			vm.setState({error: {username: 'Username must be email.'}});
			return false;
		} else {
			return true;
		}
	}
	validatePassword(user) {
		let vm = this;
		if (!user.password) {
			vm.setState({error: {password: 'Password is required.'}});
			return false;
		} else if (!hFunc.isPassword(user.password)) {
			vm.setState({error: {password: 'Password must be at least 8 letters.'}});
			return false;
		} else {
			return true;
		}
	}
	validateMatch(user) {
		let vm = this;
		if (!hFunc.isPassword(user.password, user.confirm)) {
			vm.setState({error: {confirm: 'Passwords must match.'}});
		} else {
			return true;
		}
	}
	render() {
		let authName;
		let authTemplate;
		// templating according to auth-type.
		if (this._$stateParams.authType === 'login') {
			authName = 'Login';
			authTemplate = (
				<Login 
					user={this.state.user}
					error={this.state.error}
					handleInputChange={e=>this.handleInputChange(e)}
					handleLogin={e=>this.handleLogin(e)}
				/>
			);
		} else if (this._$stateParams.authType === 'signup') {
			authName = 'Sign up';
			authTemplate = (
				<Signup 
					user={this.state.user} 
					error={this.state.error} 
					handleInputChange={e=>this.handleInputChange(e)}
					handleSignup={e=>this.handleSignup(e)}
				/>
			);
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
				<form name='AuthForm' noValidate>
					{authTemplate}
				</form>
			</div>
			//end of login
		);
	}
}
