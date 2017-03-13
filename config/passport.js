const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/Users')

const _User = new User();

passport.use(new LocalStrategy(
	function (username, password, done) {
		_User._findByUsername(username, function (err, user) {
			if (err) { return done(err); }
			if (!user) {
				return done(null, false, { message: "Incorrect username." });
			}
			if (!user.validPassword(password)) {
				return done(null, false, { message: "Incorrect password." });
			}
			return done(null, user);
		});
	}
));
