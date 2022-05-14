import React, { Component } from 'react';
import SongList from './SongsList'; 

function List(){
    const numbers = [111111111, 2222222222, 333333333, 44444444, 5555555, 666666, 7777777, 8888888, 9999999, 10000000];
    const listItems = numbers.map((number) => (
     <div key={number}>
      <input type="checkbox" value={number} class="ml-2 mr-2"/> 
      <span class="font-gotu w-30">{number}</span>
    </div>
   ));

   function handleSave(e){ //TODO: SAVE THE SELECTED SONGS TO BACKEND
    console.log('haha');
   }

   function viewSaved(e){ //TODO: VIEW SAVED

   }
    return(
        <div>
        <ul class=" rounded-lg bg-light-blue w-1/3">{listItems}</ul>
        <button onClick = {handleSave} class="justify-center pl-2 pr-2 font-gotu rounded-lg bg-light-blue mt-4">Save Selected</button>
        <button onClick = {viewSaved} class="pl-2 pr-2 font-gotu rounded-lg bg-light-blue ml-4">View Saved</button>
      </div>

    )
};

export default List;