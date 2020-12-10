import React, {useEffect, useState} from "react";
import AppRouter from "components/Router";
import {authService} from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
    <html>
        <head>
          <script src="routes/Search.js"></script>
          </head>
            <body>
                <div class="input-group">
                    <div class="input-group-text" id="basic-addon1">
                        <span class = "search"></span>
                    </div>
                    <input autofocus placeholder="search" class="form-control" type="text" autoComplete="off" name="search" id="search"/>
                </div>
                <ul class="list-group" id="list"></ul>

            </body>
        </html>
        <footer>&copy; {new Date().getFullYear()} ewhabangbang </footer>
    </>
  );
}

export default App;
