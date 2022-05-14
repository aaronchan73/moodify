import React, { Component } from "react";

function ListView() {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => (
    <li class="hover:bg-white rounded-lg font-gotu" key={number}>
      {number}
    </li>
  ));
  return (
    <div>
      <ul class="rounded-lg bg-light-blue w-20">{listItems}</ul>
    </div>
  );
}

export default ListView;
