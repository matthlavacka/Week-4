Template.feed.helpers({
  showPictures:function() {
    return Pictures.find();
  }
});

Template.profile.helpers({
	picturesCount: function() {
		return Pictures.find({'metadata.ownerId':Meteor.userId()}).count();
	},
	userPictures:function() {
    return Pictures.find({'metadata.ownerId':Meteor.userId()});
  	}
});