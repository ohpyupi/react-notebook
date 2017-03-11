import Auth from './auth.component';

const AuthRoutes = [
	{
		name: 'auth',
		url: '/auth/:authType',
		component: Auth,
	},
];

export {AuthRoutes}
