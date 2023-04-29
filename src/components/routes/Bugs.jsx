import React, { useEffect, useState } from "react";
import { BugCard } from "../pages/BugCard";
import { getBugs } from "../../services/bug";

export const Bugs = (user) => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    const getAllBugs = async () => {
      const allBugs = await getBugs();
      setBugs(allBugs);
    };
    if (user) getAllBugs();
  }, [user]);
  return (
      <div className="bug-cards">
        {bugs && bugs.map((bug) => <BugCard key={bug._id} bug={bug} />)}
      </div>
  );
};
