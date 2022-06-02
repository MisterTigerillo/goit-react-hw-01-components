import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import FriendList from "./components/FriendList";
// import TransactionHistory from "./components/TransactionHistory";
import "./App.css";

import user from "./json/user.json";
import data from "./json/data.json";
import friends from "./json/friends.json";
// console.log(friends);

export default function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />
      {/* <TransactionHistory /> */}
    </div>
  );
}
