// import { GlobalStyle } from "./GlobalStyle";
// import Profile from "./components/Profile/Profile";
// import Statistics from "./components/Statistics/Statistics";
// import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import World from "./components/Timeline/Timeline";

// import user from "./json/user.json";
// import data from "./json/data.json";
// import friends from "./json/friends.json";
import transactions from "./json/transactions.json";

export default function App() {
  return (
    <div className="App">
      {/* <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} /> */}
      <TransactionHistory items={transactions} />
      <World />
    </div>
  );
}
