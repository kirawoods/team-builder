import React, { useState } from "react";

export const Form = props => {
  const [teamMembers, setTeamMembers] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChange = event => {
    setTeamMembers({ ...teamMembers, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addMemberFunction(teamMembers);
    setTeamMembers({ name: "", email: "", role: "" });
  };

  return (
    <div className="form-container">
      <h3>Add a New Member</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name: </label>
        <input
          id="name"
          name="name"
          type="text"
          value={teamMembers.name}
          onChange={handleChange}
        ></input>

        <label htmlFor="email">Email: </label>
        <input
          id="email"
          name="email"
          type="email"
          value={teamMembers.email}
          onChange={handleChange}
        ></input>

        <label htmlFor="role">Role: </label>
        <input
          id="role"
          name="role"
          type="text"
          value={teamMembers.role}
          onChange={handleChange}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
