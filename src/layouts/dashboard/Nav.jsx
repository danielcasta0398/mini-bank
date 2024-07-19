import React from "react";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="/dashboard">Home</a>
        </li>
        <li>
          <a href="/dashboard/profile">Profile</a>
        </li>
        <li>
          <a href="/dashboard/settings">Settings</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
