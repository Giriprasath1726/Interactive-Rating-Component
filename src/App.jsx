import {Routes, Route} from "react-router-dom";
import Rating from "./Rating";
import ThankYou from "./ThankYou";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Rating />} />
      <Route path="/thankyou" element={<ThankYou/>} />
    </Routes>
  )
}

export default App