import Home from './scenes/home';
import Login from './scenes/login';

const routes = [
	{
		name: 'home',
		url: '/',
		component: Home,
	},
	{
		name: 'login',
		url: '/login',
		component: Login,
	},
];

export {routes}
