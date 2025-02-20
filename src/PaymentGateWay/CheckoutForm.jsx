import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import { useFund } from "../Provider/FundProvider";
export default function CheckoutForm() {
  const [thrownError, setThrownError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [TrnxID, setTrnxID] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { amount } = useFund();
  const price = amount;
  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price: price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure, amount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setThrownError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setThrownError("");
    }

    const { paymentIntent, confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
          },
        },
      }
    );
    if (confirmError) {
      console.log(confirmError);
    } else {
      //   console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTrnxID(paymentIntent.id);
        const funding = {
          name: user?.displayName || "Anonymous",
          amount: amount,
          date: new Date(),
        };
        axiosSecure.post("/funding", funding).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "You've funded Successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    }
  };

  return (
    <>
      <div className="py-6">
        <Link
          to="/funding"
          className="w-36 flex items-center gap-1 text-gray-500 pb-3 px-4"
        >
          <IoChevronBackOutline />
          Back
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="pt-10">
          <button
            type="submit"
            disabled={!stripe}
            className="btn bg-blue-500 text-white font-semibold"
          >
            Donate
          </button>
          <p className="text-yellow-400">{thrownError}</p>
          {TrnxID && (
            <p className="text-blue-500 py-3">
              Congratulations! Your Transaction IID: {TrnxID}
            </p>
          )}
        </div>
      </form>
    </>
  );
}
