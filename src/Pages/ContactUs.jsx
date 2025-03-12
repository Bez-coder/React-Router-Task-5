// ContactUs.js
import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
    return (
        <div>
            <ol>
                <ul>
                    <h1>User 1</h1>
                    <li>Name: Emily Johnson</li>
                    <li>Email: emily.johnson@example.com</li>
                    <li><Link to="/user1">Detail about User 1</Link></li>
                </ul>
                <ul>
                    <h1>User 2</h1>
                    <li>Name: David Smith</li>
                    <li>Email: david.smith@example.com</li>
                    <li><Link to="/user2">Detail about User 2</Link></li>

                </ul>
            </ol>
        </div>
    );
};

export default ContactUs;

