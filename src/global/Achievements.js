import React, { useContext } from "react";
import { AppContext } from "../context";

import { StepNames, AchievementsList } from "../data";

export function Achievements(props) {
  const { step } = useContext(AppContext);

  if (step === StepNames.Introduction) {
    return null;
  }

  return (
    <div className="ml-16">
      <p className="mb-4">Achievements</p>
      <ul>
        {AchievementsList.map((achievement, idx) => (
          <li key={idx}>{achievement} [Locked]</li>
        ))}
      </ul>
    </div>
  );
}
