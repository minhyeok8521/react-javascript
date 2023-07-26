import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div className="Main">
      <ul className="mainList">
        <li>
          <Link to="Profile" className="userProfile">
            자기소개
          </Link>
        </li>
      </ul>
    </div>
  );
}
