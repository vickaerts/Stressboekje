import { Meteor } from 'meteor/meteor';
import { SymptomsCollection } from './SymptomsCollection';

Meteor.publish('symptoms', () => {
    return SymptomsCollection.find();
});