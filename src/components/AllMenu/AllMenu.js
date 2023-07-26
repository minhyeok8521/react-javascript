import React, { useEffect, useState } from 'react';

export default function AllMenu() {
  const [inOpen, setIsOpen] = useState();

  useEffect(() => {
    // alert('c');
    console.log('cc');
  });
  return (
    <div className="AllMenuWrap">
      <button>메뉴</button>
    </div>
  );
}
