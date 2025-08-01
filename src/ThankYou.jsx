import Thank from "./assets/illustration-thank-you.svg";
import { useLocation, useNavigate } from "react-router-dom";

const ThankYou = () => {

    const location = useLocation();
    // const navigate = useNavigate();
    const rating = location.state?.rating;

  return (
    <>
      <div className="bg-zinc-900 min-h-screen flex items-center justify-center">
        <div className="bg-zinc-700 w-110 p-6 rounded-4xl flex items-center justify-center flex-col gap-4">
          <div>
            <img src={Thank} alt="Thank-image" className="" />
          </div>
          <div className="text-orange-500 text-1xl w-60 bg-zinc-300 flex items-center justify-center p-1 rounded-4xl">
            <p>You selected {rating} out of 5</p>
          </div>
          <div className="text-4xl text-white font-bold pt-6">Thank You !</div>
          <div className="text-gray-400 text-center p-4">
            <p>We appreciate you taking the time to rating. If you ever need more support, don't hesiate to get in touch!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
