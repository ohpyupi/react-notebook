import React from 'react';
import ReactDOM from 'react-dom';

//import {Router, Route, hashHistory, browserHistory} from 'react-router';;
import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from 'ui-router-react';
import {routes} from './app.config';

ReactDOM.render(
	<UIRouter plugins={[pushStateLocationPlugin]} states={routes}>
		<UIView/>
	</UIRouter>, 
	document.getElementById('root')
);
