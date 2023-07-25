import React from 'react';

export default function UserProfile() {
  const onSubmit = (e) => {
    alert('A');
  };

  return (
    <div className="userProfile">
      <form>
        <input type="text" placeholder="이름" />
        <input type="number" placeholder="나이" />
        <button type="submit">확인</button>
      </form>
    </div>
  );
}
