import React from "react";
import Routes from "./Routes/routes";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;

//refactor code in singleItem.tsx
//ending any type
//ending repeatability in store
//making categories dynamic
//converting function based Routes page to class based one
//delivery charges 999 add