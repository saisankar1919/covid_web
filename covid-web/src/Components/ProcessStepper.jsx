import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Identification',
  'Vaccine center',
  'Appointment',
];

export default function ProcessStepper(props) {
  return (
      
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={props.stepCount}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}