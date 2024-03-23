import React from 'react';


const App = () => {
  return (
    <>
      <center>
        <div id='wrapper'>
          <h1 id="logintitle">Login</h1>
          <form>
            <div className="input-container">
              <input type="text" id="username" required />
              <label htmlFor="username">Username</label>
            </div>
            <div className="input-container">
              <input type="password" id="password" required />
              <label htmlFor="password">Password</label>
            </div>
            <div>
              
              <select>
                <option>Farmer</option>
                <option>Admin</option>
              </select>
             
            </div>
            <div class="tacbox">
              <input id="checkbox" type="checkbox" />
              <label id='terms' for="checkbox"> I agree to these <a href="#">Terms and Conditions</a>.</label>
            </div>

            <div className="buttons">
              <button type="submit">Login</button>
              <button type="submit">Register</button>
            </div>
            <div className="continue-with-google">
              <button type="button">Continue with Google</button>
            </div>
          </form>
        </div>
      </center>
    </>
  );
};

export default App;
