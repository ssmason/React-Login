import React from 'react';
import { LoginForm } from './components/loginForm';
import './App.css';
import { Dashboard } from './components/Dashboard';

function App() {

  const [ loggedin, setLoggedIn ] = React.useState(false);
  const [ user, setUser ] = React.useState(null);

  const credentials = [
    { id: 1, username: 'user1', password: 'pass1' },
    { id: 2, username: 'user2', password: 'pass2' },
    { id: 3, username: 'steve', password: 'mason' }
  ];

  return (
    <div className="App">
      <header className="">
        <h1>Login Page</h1>
      </header>
      <main>

        {user ?  <Dashboard user={user} setUser={setUser} /> :  <LoginForm credentials={credentials} setUser={setUser} />}


      </main>
    </div>
  );
}

export default App;
