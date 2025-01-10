import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UsetansTackQuery from "../../hooks/UsetansTackQuery";
import useAxiosSecure from "../../hooks/useAxiosSecure";



const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errors, setErrors] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [cart] = UsetansTackQuery();
    const totalPrice = cart.reduce((total, items) => total + items.price, 0);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const createPaymentIntent = async () => {

            try {
                const res = await axiosSecure.post('/create-payment-intent', { price: totalPrice })
                console.log(res.data);
                setClientSecret(res.data.ClientSecret)
            } catch (error) {
                console.log(error);
            }
        }

        if (totalPrice > 0) {
            createPaymentIntent()
        }
    }, [axiosSecure , totalPrice])

    const handelSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card == null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error message is', error)
            setErrors(error.message)
        } else {
            console.log('paymentMethod is', paymentMethod)
            setErrors('')
        }


    }

    return (
        <form onSubmit={handelSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}

            />
            <button className="btn btn-primary btn-sm my-4" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-500">{errors}</p>

        </form>
    );
};

export default CheckOutForm;