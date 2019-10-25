import React from "react";

export const TeamMembers = props => {
  console.log(props);
  return (
    <div className="all-team-members">
      {props.teamList.map(member => {
        return (
          <div className="team-member-card" key={member.id}>
            <h3 className="member-name">{member.name}</h3>
            <p>{member.email}</p>
            <p>{member.role}</p>
          </div>
        );
      })}
    </div>
  );
};
