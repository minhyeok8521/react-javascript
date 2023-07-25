import React from 'react';
import Link from 'react-router-dom';

export default function AllMenu() {
  return (
    <div className="AllMenuWrap">
      <ul>
        <li>
          <Link to="Profile">자기소개</Link>
        </li>
      </ul>
    </div>
  );
}
