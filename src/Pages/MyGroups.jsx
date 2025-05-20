import React, { useEffect, useState } from 'react';
import Loading from './Loading';

const MyGroups = () => {
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
                            <h2>My Groups</h2>
                        </div>
            }
        </div>
    );
};

export default MyGroups;