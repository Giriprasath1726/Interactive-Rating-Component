import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Star from "./assets/icon-star.svg";

const App = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(null);

  const handleSubmit = () => {
    if (rating != null) {
      navigate("/thankyou", { state: { rating } });
    } else {
      alert("Please select rating before submiting");
    }
  };

  return (
    <>
      <div className="bg-zinc-900 min-h-screen flex items-center justify-center">
        <div className="bg-zinc-700 w-110 p-6 rounded-4xl flex flex-col gap-6">
          <div className="rounded-full w-10 h-10 bg-zinc-300 flex items-center justify-center">
            <img src={Star} alt="Star-image" className="size-[20px]" />
          </div>
          <div className="text-white text-[26px]">
            <h1>How did we do it?</h1>
          </div>
          <div className="text-gray-400 text-[16px]">
            <h2>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us to improve our offering!
            </h2>
          </div>
          <div className="text-white flex justify-evenly w-full text-[16px]">
            {[1, 2, 3, 4, 5].map((num) => (
              <p
                key={num}
                onClick={() => setRating(num)}
                className={`${
                  rating === num ? "bg-orange-500 text-white" : "bg-zinc-400"
                } size-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-orange-300`}
              >
                {num}
              </p>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="bg-white text-orange-500 font-bold text-2xl justify-evenly rounded-4xl w-full p-2 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
