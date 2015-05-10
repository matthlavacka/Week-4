Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function(){
  this.route('feed', {path: '/'} );
  this.route('login', {path: '/login'});
  this.route('profile', {path: '/profile'});
});

var OnBeforeActions;

OnBeforeActions = {
	loginRequired: function() {
		if (! Meteor.userId()) {
			this.render('login');
		}
		else {
			this.next();
		}
	}
};

Router.onBeforeAction(OnBeforeActions.loginRequired, {
    only: ['profile', 'feed']
});