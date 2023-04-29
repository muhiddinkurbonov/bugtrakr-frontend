import React from "react";
import { convertTSToLocal } from "../utils/date";

export const BugCard = ({ bug }) => {
  const date = convertTSToLocal(bug.createdAt);
  return (
    <div className="bug-card">
      <p className="bugTitle">
        Title: <span className="title">{bug.title}</span>
      </p>
      <p>Description: {bug.description}</p>
      <p>Priority: {bug.priority}</p>
      <p>Status: {bug.status}</p>
      <p>Assigned to: {bug.assignedTo}</p>
      <p className="createdAt">Created on: {date}</p>
      <p className="createdBy">Created by: {bug.createdBy.email}</p>
    </div>
  );
};
