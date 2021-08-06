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

//making categories dynamic
//converting function based Routes page to class based one