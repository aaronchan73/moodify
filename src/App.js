import "./App.css";
import React, { Component } from "react";

function App() {
  return (
    <div class="pl-2 grid grid-rows-7 grid-col-4 gap-1">
      <div>
        <h1
          class="justify-items-center text-[#697CAE] pt-40 text-6xl font-gotu
        content-center tracking-wide col-start-2 col-span-2"
        >
          Spotify-app.
        </h1>
        <h1 class="justify-items-center text-[#697CAE]">
          __________________________________________________________
        </h1>
      </div>

      <div>
        <p class="max-w-prose text-[#697CAE] grid justify-items-center">
          words words words words words words words words words words words
          words words words words words words words words words words words
          words words words words words words words words words words words
          words words words words words words
        </p>
      </div>
      <div>
        <button class="px-8 rounded-md bg-light-blue text-dark-blue">
          Log In
        </button>
      </div>
    </div>
  );
}

export default App;


// import React, { Component } from "react";

// class mainPage extends Component {
//   fileSelectedHandler = (event) => {
//     console.log(event);
//   };

//   render() {
//     return (
//       <div class="grid grid-cols-1 gap-4 place-items-center">
//         <input type="file" onChange={this.fileSelectedHandler} />
//       </div>
//     );
//   }
// }

// export default mainPage;
