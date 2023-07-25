import React from 'react';
import Link from 'react-router-dom';

export default function Header() {
  return (
    <div className="headerWrap">
      <strong>헤더</strong>
      <Link to="/">홈</Link>
    </div>
  );
}
