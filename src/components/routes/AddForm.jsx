import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {addBug} from '../../services/bug'


export const AddForm = ({user}) => {
  const navigate = useNavigate();

  const [bugTitle, setBugTitle] = useState("");
  const [bugDescription, setBugDescription] = useState("");
  const [bugPriority, setBugPriority] = useState("low");
  const [bugStatus, setBugStatus] = useState("new");
  const [assigned, setAssigned] = useState("");

  const handleBugTitle = (e) => {
    setBugTitle(e.target.value);
  };
  const handleBugDescription = (e) => {
    setBugDescription(e.target.value);
  };
  const handleBugPriority = (e) => {
    setBugPriority(e.target.value);
  };
  const handleBugStatus = (e) => {
    setBugStatus(e.target.value);
  };
  const handleBugAssigned = (e) => {
    setAssigned(e.target.value);
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const bug = {
      title: bugTitle,
      description: bugDescription,
      priority: bugPriority,
      status: bugStatus,
      createdBy: user.id,
      assignedTo: assigned
    };
    await addBug(bug);
    navigate('/bugs')
  };

  return (
    <div className="container">
      <form id="add-form" onSubmit={handleSubmit}>
        <label htmlFor="bug-title">Title</label>
        <input
          type="text"
          id="bug-title"
          name="bug-title"
          value={bugTitle}
          onChange={handleBugTitle}
          required
        />
        <label htmlFor="bug-description">Description</label>
        <textarea
          type="text"
          id="bug-description"
          value={bugDescription}
          onChange={handleBugDescription}
          required
        ></textarea>
        <label htmlFor="bug-priority">Priority Level</label>
        <select name="bug-priority" id="bug-priority" value={bugPriority} onChange={handleBugPriority} required>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
        <div className="separator"></div>
        <label htmlFor="bug-status">Status</label>
        <select name="bug-status" id="bug-status" value={bugStatus} onChange={handleBugStatus} required>
          <option value="new">new</option>
          <option value="in progress">in progress</option>
          <option value="resolved">resolved</option>
        </select>
        <div className="separator"></div>
        <label htmlFor="assigned">Assigned to:</label>
        <input
          type="text"
          id="assigned"
          name="assigned"
          value={assigned}
          onChange={handleBugAssigned}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
