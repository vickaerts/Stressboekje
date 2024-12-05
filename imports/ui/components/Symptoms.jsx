import React from 'react';
import { useTracker } from 'meteor/react-meteor-data'

import { SymptomsCollection } from '../../api/SymptomsCollection';

// Show list of Symptoms
// Add and Edit Symptoms
// Click on Symptom to open detailed history


// Render one Symptom. Maybe move this to its own component?
const Symptom = ({ symptom }) => {
    return <li>{symptom}</li>
}

const Symptoms = () => {
    // Get Symtoms from dB
    const symptoms = useTracker(() => SymptomsCollection.find({}).fetch());
    console.log(symptoms)
    return <div>
        <ul>
            { symptoms.map(symptom => <Symptom key={ symptom._id } symptom={ symptom.symptomName }/>) }
        </ul>
    </div>;
};

export { Symptoms }