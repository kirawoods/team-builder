import React, { useState } from "react";
import "./App.css";
import { TeamMembers } from "./components/TeamMembers";
import { Form } from "./components/Form";

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Kira",
      email: "kira@fakeemail.com",
      role: "Co-Founder/Software Engineer"
    },
    {
      id: 2,
      name: "Hal",
      email: "Hal@fakeemail.com",
      role: "Co-Founder/CTO"
    },
    {
      id: 3,
      name: "Rich",
      email: "Rich@fakeemail.com",
      role: "Co-Founder/Head of Business Development"
    }
  ]);
  const addTeamMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMembers([...teamMembers, newMember]);
  };
  return (
    <div className="App">
      <h2>Meet the Team</h2>

      <TeamMembers teamList={teamMembers} />

      <Form addMemberFunction={addTeamMember} />
    </div>
  );
}

export default App;
