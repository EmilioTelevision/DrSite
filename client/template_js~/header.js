Template.header.active_about = function() {
	return Session.equals('page', 'home') ? 'active' : '';
};

Template.header.active_contact = function() {
	return Session.equals('page', 'contact') ? 'active' : '';
};

var dropdownTimer;
Template.header.events({
	'mouseenter .nav_button': function() {
		$('.dropdown').fadeIn('fast');
	},
	'mouseleave .nav_button': function() {
		dropdownTimer = setTimeout(function() {
			$('.dropdown').fadeOut('fast');
		}, 100);
	},
	
	'mouseenter .dropdown': function() {
		clearTimeout(dropdownTimer);
		$('.dropdown').fadeIn('fast');
	},
	'mouseleave .dropdown': function() {
		$('.dropdown').fadeOut('fast');
	},
	'mouseenter .dropdown li': function(e) {
		$(e.currentTarget).find('a').addClass('active');
	},
	'mouseleave .dropdown li': function(e) {
		$('.dropdown li a').removeClass('active');
	},
	'click .dropdown li': function(e) {
		$('.nav_button h2').text($(e.currentTarget).text());
	}
});

Meteor.startup(function() {
	$('.logo a').live('click', function() {
		$('.nav_button h2').text('Surgical Procedures');
	});
	$('#nav a').live('click', function() {
		$('.nav_button h2').text('Surgical Procedures');
	});
});