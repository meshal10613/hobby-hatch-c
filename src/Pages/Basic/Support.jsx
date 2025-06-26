import React from 'react';

const Support = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-primary text-center">Support</h1>
        <p className="text-gray-700 text-base sm:text-lg mb-6 text-justify">
            Need help or have questions? We’re here to assist you! Below are some common support topics and how you can reach out.
        </p>

        <div className="space-y-4">
            {[
            {
                q: 'How do I join a hobby group?',
                a: 'Go to the "Groups" section, search for your desired hobby, and click "Join".',
            },
            {
                q: 'How can I create a new group?',
                a: 'Click on "Create Group" in your dashboard and fill out the required information.',
            },
            {
                q: 'Who do I contact for technical issues?',
                a: 'Please use the Contact page to reach our support team.',
            },
            ].map((item, i) => (
            <div key={i} className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-medium">{item.q}</div>
                <div className="collapse-content">
                <p>{item.a}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default Support;
