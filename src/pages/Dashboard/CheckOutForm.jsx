import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UsetansTackQuery from "../../hooks/UsetansTackQuery";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUsers from "../../hooks/useUsers";
import Swal from "sweetalert2";



const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errors, setErrors] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transaction, setTransaction] = useState('')
    const [cart, refetch] = UsetansTackQuery();
    const { users } = useUsers()
    const totalPrice = cart.reduce((total, items) => total + items.price, 0)
    console.log(totalPrice);;
    const axiosSecure = useAxiosSecure();

    useEffect(() => {


        // try {
        //     const res = axiosSecure.post('/create-payment-intent', { price: totalPrice })
        //     console.log(res.data);
        //     setClientSecret(res.data.ClientSecret)
        // } catch (error) {
        //     console.log(error);
        // }


        if (totalPrice > 0) {
            // createPaymentIntent()
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {

                    console.log(res);
                    setClientSecret(res?.data?.ClientSecret)
                })



        }
    }, [axiosSecure, totalPrice])

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

        const { paymentIntent, error: paymentError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: users?.name || 'anonymous',
                    email: users?.email || 'anonymous'
                }
            }
        })
        if (paymentError) {
            console.log('paymentError ', paymentError);
        } else {
            console.log("paymentIntent", paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                setTransaction(paymentIntent.id);
                // now save tha payment info in database

                const paymentInfo = {
                    email: users?.email,
                    price: totalPrice,
                    transaction: paymentIntent?.id,
                    date: new Date(),
                    status: 'pending',
                    cardId: cart.map(items => items._id),
                    menuItemId: cart.map(items => items.CardId)
                }
                console.log(paymentInfo);

                const res = await axiosSecure.post('/payments', paymentInfo);
                console.log('payment users history', res.data);
                if (res.data.paymentresult.insertedId) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thanks For Your Payment",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            }
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
            <button className="btn btn-primary btn-sm my-4" type="submit" >
                Pay
            </button>
            <p className="text-red-500">{errors}</p>

        </form>
    );
};

export default CheckOutForm;

//disabled={!stripe || !clientSecret }