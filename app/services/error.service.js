import 'snackbarjs';
import 'snackbarjs/dist/snackbar.min.css';
import 'snackbarjs/themes-css/material.css';

export default class ErrorHandler {
	constructor(stateService) {
		this._stateService = stateService;
	}
	flash(message, ...args) {
		let options = {
			content: message,
			style: 'snackbar',
			timeout: 1000,
		};
		$.snackbar(options);
		if (args.length > 0) {
			let params = args[1] || {};
			this._stateService.go(args[0], params);
		}
	}
}
