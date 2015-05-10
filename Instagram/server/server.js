// Make the allow/denys Method here.
Pictures.allow({
  insert:function(){return true;},
  remove:function(){return true;},
  update:function(){return true;},
});


//Publish Method.
Meteor.publish('Pictures',function(){
  return Pictures.find();
});