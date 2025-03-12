import React, { useState } from "react";

const User2 = () => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div>
            <ul>
                <h1>User 2</h1>
                <li>Name: David Smith</li>
                <li>Email: david.smith@example.com</li>
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

export default User2;