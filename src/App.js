import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [idToken, setidToken] = useState(null);
  const [someState, setSomeState] = useState(null);

  useEffect(() => {
    console.log("Hello! I am inside useEffect");
    setSomeState("Some State Value!");

    const hostUrl = window.location.protocol + "//" + window.location.host;

    console.log("Current host- " + hostUrl);
    console.log({ accessToken });

    axios.get(hostUrl + "/.auth/me").then((response) => {
      console.log(response.request.response);

      let respBody = JSON.parse(response.request.response);
      console.log(respBody[0]);
      setAccessToken(respBody[0].access_token);
      setidToken(respBody[0].id_token);
    });

    if ({ accessToken } == null) {
      axios.get(hostUrl + "/.auth/me").then((response) => {
        console.log(response);
      });
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>Access Token- {accessToken}</p>
      <p>Id Token- {idToken}</p>
    </div>
  );
}

export default App;
