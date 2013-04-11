Template.header.active_about = function() {
	return Session.equals('page', 'home') ? 'active' : '';
};

Template.header.active_contact = function() {
	return Session.equals('page', 'contact') ? 'active' : '';
};