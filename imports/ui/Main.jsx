import React from 'react';
import { Symptoms } from './components/Symptoms';

// Main:
// Show list of Symptoms
// Add and Edit Symptoms
// Click on Symptom to open detailed history
// Enter month name from dropdown with months and years
// Assign Status to Symptom: green, orange, red


const Main = () => {
 return <div>
        <h1>Welkom in jouw stressboekje</h1>
        <Symptoms />
    </div>;
};

export { Main }