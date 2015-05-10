Template.navbar.events({
  'change #exampleInput':function(event, template){

    //jQuery to get the value.    
    var file = $('#exampleInput').get(0).files[0] 
    
    // Store file as FS.file
    fsFile = new FS.File(file);

    //FS.File support metadata. For storing form inputs or username
    fsFile.metadata = {
      ownerId:Meteor.userId(),
      username:Meteor.user().profile.name,
    }

    Pictures.insert(fsFile,function(err,result){
      if(!err){
        console.log(result)
      }
    })
  }
});