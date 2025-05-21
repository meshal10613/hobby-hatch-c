import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import Loading from './Loading';
import CustomerReview from '../Components/CustomerReview';
import HobbyCat from '../Components/HobbyCat';
import GettingStarted from '../Components/GettingStarted';

const Home = () => {
    const [pageLoad, setPageLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setPageLoad(false), 500); // simulate delay
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {
                pageLoad
                    ?   <Loading/>
                    :   <div>
                            <Banner/>
                            <GettingStarted/>
                            <HobbyCat/>
                            <CustomerReview/>
                        </div>
            }
        </div>
    );
};

export default Home;