import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import axios from "axios";
const KEY =
    "pk_test_51KGvLHAHKlPNtyitOgMPffQNOOG9ABHTdWdF99pDZwwwaznS1ENyhOPrvM1Igio90VJNybr0cZ0NZUVQEGeJ50Eu00OSwNeh1j";

const CheckOut = () => {
    const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post(
                    "http://localhost:5000/api/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: 2000,
                    }
                );
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        return stripeToken && makeRequest;
    }, [stripeToken]);
    return (
        <div>
            <Navbar />
            <Announcement />
            <div
                style={{
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {" "}
                <StripeCheckout
                    name="Treat Shop"
                    image="https://icon-library.com/images/pet-icon/pet-icon-16.jpg"
                    billingAddress
                    shippingAddress
                    description="Your total is $400"
                    amount={20000}
                    token={onToken}
                    stripeKey={KEY}
                >
                    <button
                        style={{
                            border: "none",
                            width: 120,
                            borderRadius: "5",
                            padding: "20px",
                            backgroundColor: "black",
                            color: "white",
                            fontweight: "600",
                            cursor: "pointer",
                        }}
                    >
                        Pay Now
                    </button>
                </StripeCheckout>
            </div>
            <Newsletter />
            <Footer />
        </div>
    );
};

export default CheckOut;
