
import React from 'react';
import { useAppContext } from '../context/AppContext';
import Top from '../components/Onboarding/Top';
import Solutions from '../components/Onboarding/Solutions';
import About from '../components/Onboarding/About';
import Resources from '../components/Onboarding/Resources';
import Blogs from '../components/Onboarding/Blogs';
import FAQ from '../components/Onboarding/FAQ';
import Services from '../components/Onboarding/Services';

const OnboardingScreen = () => {

    const { setShowUserLogin } = useAppContext()
    return (
        <div>
            <Top/>
            <Solutions/>
            <About/>
            <Services/>
            <Resources/>
            <Blogs/>
            <FAQ/>
        </div>
    );
};

export default OnboardingScreen
