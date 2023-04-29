import React from "react";

export const AddForm = () => {
  return (
    <div className="container">
      <form action="" id="add-form">
        <label htmlFor="bug-title">Title</label>
        <input type="text" id="bug-title" name="bug-title" required />
        <label htmlFor="bug-description">Description</label>
        <textarea type="text" id="bug-description" required></textarea>
        <label htmlFor="bug-priority">Priority Level</label>
        <select name="bug-priority" id="bug-priority" required>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
        <div className="separator"></div>
        <label htmlFor="bug-status">Status</label>
        <select name="bug-status" id="bug-status" required>
          <option value="new">new</option>
          <option value="in-progress">in progress</option>
          <option value="resolved">resolved</option>
        </select>
        <div className="separator"></div>
        <label htmlFor="assigned">Assigned to:</label>
        <input type="text" id="assigned" name="assigned" required/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
