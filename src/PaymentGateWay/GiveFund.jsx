import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import logo4 from "../assets/logo/logo4.png";
import CustomHelmet from "../ReusableComponents/Helmet";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY);
export default function GiveFund() {
  return (
    <>
      <CustomHelmet title={"LifeDrops | Give Fund"} />
      <div className="w-10/12 mx-auto py-5 md:pt-6 px-6">
        <div className="flex items-center justify-center gap-3">
          <div>
            <img src={logo4} alt="Blood Logo" className="w-8 h-11" />
          </div>
          <div>
            <h1 className="text-base lg:text-xl text-gray-700 font-bold">
              Give Fund
            </h1>
            <p className="text-xs text-red-500 font-medium w-full">
              Every Drop Counts. Donate Blood, Save Lives
            </p>
          </div>
        </div>
        <div className="py-12">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </>
  );
}
