import { Meteor } from "meteor/meteor";
import { SymptomsCollection } from "/imports/api/SymptomsCollection";
import '../imports/api/SymtomsPublications'

const insertSymptom = (symptomText) =>
  SymptomsCollection.insertAsync({ symptomName: symptomText });

Meteor.startup(async () => {
  if ((await SymptomsCollection.find().countAsync()) === 0) {
    [
      "First Task",
      "Second Task",
      "Third Task",
      "Fourth Task",
      "Fifth Task",
      "Sixth Task",
      "Seventh Task",
    ].forEach(insertSymptom);
  }
});