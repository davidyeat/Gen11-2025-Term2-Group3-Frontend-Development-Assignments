import ProfileCard from "./components/ProfileCard.jsx";
import { userData } from "./data.js";

function App() {
  return (
    <>
      <header>
        <h1>PROFILE CARD</h1>
      </header>
      <main>
        <div className="profile-grid">
          {userData.map((user) => (
            <ProfileCard key={user.id} user={user} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
