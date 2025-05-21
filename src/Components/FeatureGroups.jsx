import React, { useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { format, isBefore } from 'date-fns';

const FeatureGroups = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/hobbies`)
        .then(res => res.json())
        .then(data => {
            setUserData(data)
        })
    }, [])
    const date = format(new Date(), "yyyy-MM-dd");
    const newData = userData.filter((d) => !isBefore(d?.date, date));
    const displayedItems = newData.length <= 6 ? newData : newData.slice(0, 6);
    console.log(displayedItems)
    return (
        <div>
            
        </div>
    );
};

export default FeatureGroups;