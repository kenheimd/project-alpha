"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { useUser } from "@clerk/nextjs";
import AlphaConstruction from "./AlphaConstruction";

function greetingForHour(hour: number) {
  if (hour >= 6 && hour < 9) return "God morgen";
  if (hour >= 9 && hour < 13) return "God formiddag";
  if (hour >= 13 && hour < 18) return "God ettermiddag";
  if (hour >= 18) return "God kveld";
  return "God natt";
}

export default function AlphaIntro({ userName }: { userName: string }) {
  const { user } = useUser();
  const [greeting, setGreeting] = useState("");

  const resolvedName =
    user?.firstName ||
    user?.fullName?.split(" ")[0] ||
    userName;

  useEffect(() => {
    const localHour = new Date().getHours();
    setGreeting(`${greetingForHour(localHour)}, ${resolvedName}.`);
  }, [resolvedName]);

  return (
    <div className="introScreen" aria-hidden="true">
      <div className="introMarkStage">
        <AlphaConstruction className="introConstruction" />

        <div className="introGreeting">
          <div className="introGreetingText">
            {Array.from(greeting).map((character, index) => (
              <span
                key={`${character}-${index}`}
                style={{ animationDelay: `${3.25 + index * 0.052}s` } as CSSProperties}
              >
                {character}
              </span>
            ))}
            <i className="introTypingCursor" />
          </div>
          <small>Ditt investeringssystem er klart.</small>
        </div>
      </div>
    </div>
  );
}
