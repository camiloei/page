import React, { useContext } from "react";
import { StepNames, T1 } from "../data";
import { AppContext } from "../context";

export function IntroScreen(props) {
  const { step, setTrophies, setStep } = useContext(AppContext);

  if (step !== StepNames.Introduction) {
    return null;
  }

  function goToNext() {
    setTrophies([T1]);
    setStep(StepNames.Connections);
  }

  function goToEnd() {
    setStep(StepNames.FastEnd);
  }

  return (
    <p>
      Hello <span className="font-semibold">visitor</span>, this is my{" "}
      <span className="font-semibold">old self</span> writing.
      <br /> If <span className="font-semibold">past</span> is immutable, an
      immutable version of <span className="font-hairline">me</span> is stored
      on this app.
      <br />
      <br />
      Do you want to know more about this?{" "}
      <button
        className="mr-1 inline-block hover:bg-gray-900 hover:text-gray-200"
        onClick={goToNext}
      >
        yes
      </button>
      or{" "}
      <button
        className="hover:bg-gray-900 hover:text-gray-200"
        onClick={goToEnd}
      >
        no
      </button>
      .
    </p>
  );
}
