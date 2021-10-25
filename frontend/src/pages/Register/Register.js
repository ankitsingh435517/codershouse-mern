import React from 'react';
import Button from '../../components/shared/Button/Button';
import style from './Register.module.css';
import StepPhoneEmail from '../../components/RegisterComponents/StepPhoneEmail/StepPhoneEmail';
import StepOtp from '../../components/RegisterComponents/StepOtp/StepOtp';
import StepName from '../../components/RegisterComponents/StepName/StepName';
import StepAvatar from '../../components/RegisterComponents/StepAvatar/StepAvatar';
import StepUsername from '../../components/RegisterComponents/StepUsername/StepUsername';
import { useState } from 'react';

const Register = () => {
    const steps = {
       1: StepPhoneEmail,
       2: StepOtp,
       3: StepName,
       4: StepAvatar,
       5: StepUsername
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

export default Register
