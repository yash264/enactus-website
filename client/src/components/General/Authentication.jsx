import React, { useEffect, useState } from "react";

export const Authentication = () => {

    // Use state to manage user details
    const [userDetails, setUserDetails] = useState({
        countryCode: "",
        phoneNo: "",
        firstName: "",
        lastName: ""
    });

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const SignInButton = async () => {

        // Create a script element
        const script = document.createElement('script');
        script.src = 'https://www.phone.email/sign_in_button_v1.js';
        script.async = true;

        // Append the script to the document body
        document.body.appendChild(script);

        const phoneEmailListener = (userObj) => {
            const { 
                    user_json_url,
                    user_country_code, 
                    user_phone_number,
                    user_first_name, 
                    user_last_name 
                } = userObj;

            setIsAuthenticated(true);

            setUserDetails({
                countryCode: user_country_code,
                phoneNo: user_phone_number,
                url: user_json_url,
                firstName: user_first_name,
                lastName: user_last_name,
            });

        };

        window.phoneEmailListener = phoneEmailListener;

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    };

    useEffect(() => {
        if (!isAuthenticated) {
            SignInButton();
        }
    }, [isAuthenticated]);

    return (
        <React.Fragment>
            {!isAuthenticated && (
                <div className="pe_signin_button" data-client-id="18915672557661999725"></div>
            )}

            {isAuthenticated && (
                <h4 style={{ lineHeight: "36px" }}>
                    Phone Authentication Successfull. 
                    <br />
                    {userDetails.firstName} {userDetails.lastName}
                    <br />
                    {userDetails.countryCode} {userDetails.phoneNo}
                </h4>
            )}
        </React.Fragment>
    );
};