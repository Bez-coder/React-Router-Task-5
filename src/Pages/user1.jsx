// User1.js
import React, { useState } from "react";

const User1 = () => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div>
            <ul>
                <h1>User 1</h1>
                <li>Name: Emily Johnson</li>
                <li>Email: emily.johnson@example.com</li>
                <li>
                    <button onClick={() => setShowDetails(!showDetails)}>
                        {showDetails ? "Hide Details" : "More Info"}
                    </button>
                </li>
                {showDetails && (
                    <div>
                        <p>Additional information about Emily Johnson...</p>
                        {/* Add more details as needed */}
                    </div>
                )}
            </ul>
        </div>
    );
};

export default User1;
