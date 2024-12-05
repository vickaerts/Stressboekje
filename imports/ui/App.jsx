import React from 'react';
import { useTracker, useSubscribe } from 'meteor/react-meteor-data';

import { Main } from './Main'
import { SymptomsCollection } from '../api/SymptomsCollection';

export const App = () => {
  const isLoading = useSubscribe('symptoms');
  const symptoms = useTracker(() => SymptomsCollection.find({}).fetch())
  console.log(symptoms)
  if (isLoading()) {
    return <div>Loading...</div>
  }
  return <div>
    <Main/>
  </div>
};
