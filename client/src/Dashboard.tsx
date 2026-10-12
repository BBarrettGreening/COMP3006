import './Dashboard.css';

export function Dashboard({ onSignOut }: { onSignOut: () => void }) {
  return (
    <>
      <header className="topbar">
        <h1>Open Library</h1>
        <input type="search" placeholder="Search by title or author" aria-label="Search books" />
        <button onClick={onSignOut}>Sign out</button>
      </header>

      <main>
        <h2>Recommended books</h2>
        <div className="cover">Cover</div>
      </main>
    </>
  );
}
