import { useState } from 'react';
import './App.css';
import { Dashboard } from './Dashboard';

const API_URL = 'http://localhost:3000';

export function App() {
  const [page, setPage] = useState('home');

  async function login() {
    const response = await fetch(`${API_URL}/users/login`, { method: 'POST' });
    if (!response.ok) return;
    const data = await response.json();
    setPage(data.redirect);
  }

  if (page === 'dashboard') {
    return <Dashboard />;
  }

  return (
    <>
      <h1>Open Library</h1>
      <p>Please sign in to continue</p>
      <button onClick={login}>Sign in</button>
      <button onClick={login}>Create Account</button>
    </>
  );
}
