import React from 'react';
import style from './Login.module.css';
import StepPhoneEmail from '../../components/RegisterComponents/StepPhoneEmail/StepPhoneEmail';
import StepOtp from '../../components/RegisterComponents/StepOtp/StepOtp';
import { useState } from 'react';


const Login = () => {
    const steps = {
        1: StepPhoneEmail,
        2: StepOtp
     }
 
     const [step, setStep] = useState(1);
 
     const Step = steps[step];
     
     const nextStep = () => {
         setStep(step + 1);
     }
     return (
         <>
             <Step onClick={nextStep}/>
         </>
     )
}

export default Login
