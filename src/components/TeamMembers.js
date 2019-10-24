import React from "react";

export const TeamMembers = props => {
  console.log(props);
  return (
    <div className="all-team-members">
      {props.teamList.map(member => {
        return (
          <div className="team-member-card" key={member.id}>
            <h3>{member.name}</h3>
            <ul>
              <li>{member.email}</li>
              <li>{member.role}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};
