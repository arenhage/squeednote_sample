if (Meteor.isClient) {
  // counter starts at 0
  Template.notes.helpers({
    notes: function () {
      return Note.find({});
    }
  });

  Template.addNote.events({
    'submit .add-note': function(e) {
      var title = e.target.title.value;
      var text = e.target.text.value;
      Note.insert({title:title, text:text});
      e.target.title.value = "";
      e.target.text.value = "";
      //Prevent default form submit
      return false;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Note = new Mongo.Collection("note");
