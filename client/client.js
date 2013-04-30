Meteor.Router.add({
	'/': function() {
		Session.set('page', 'home');
		$('html,body').animate({scrollTop: 0}, 200);
		return 'page_home'
	},
	'/:page': function(page) {
		Session.set('page', page);
		$('html,body').animate({scrollTop: 0}, 200);
		return 'page_'+page;
	},
});
