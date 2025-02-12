// filepath: frontend/src/pages/TrainingModule.js
import React from 'react';
import { useParams } from 'react-router-dom';

const TrainingModule = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Training Module {id}</h1>
      {/* Add content for the specific training module */}
    </div>
  );
};

export default TrainingModule;
