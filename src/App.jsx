import { useState } from "react";
import AuthContext from "./context/AuthContext";
import Rad_form from "./components/Rad_form";
import Destinatarios from "./components/Destinatarios";

function App() {
  const [step, setStep] = useState("rad");
  return (
    <>
      <AuthContext.Provider value={{ step, setStep }}>
        <div className="container">
          {step === "rad" && <Rad_form />}
          {step === "desti" && <Destinatarios />}
        </div>
      </AuthContext.Provider>
    </>
  );
}

export default App;
