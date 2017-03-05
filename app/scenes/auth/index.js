import Auth from './auth.component';

const AuthRoutes = [
	{
		name: 'login',
		url: '/auth/:authType',
		component: Auth,
	},
];

export {AuthRoutes}
