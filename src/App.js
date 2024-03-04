// import logo from "./logo.svg";
import { useState } from "react";
import "./index.css";
import Friends from "./Friends/Friends";
import FormAddFriend from "./Form/FormAddFriend";
import FormSplitBill from "./Form/FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friends, setFriends] = useState(initialFriends);
  const [isAddFriendOpen, setIsAddFriendOpen] = useState(false);

  const handleSplit = (value) => {
    // Split bill logic
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  };
  return (
    <div className="app">
      <div className="sidebar">
        <Friends
          friends={friends}
          onSelect={setSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {isAddFriendOpen && (
          <FormAddFriend onAddFriends={(f) => setFriends([...friends, f])} />
        )}
        {isAddFriendOpen ? (
          <button className="button" onClick={() => setIsAddFriendOpen(false)}>
            Close
          </button>
        ) : (
          <button className="button" onClick={() => setIsAddFriendOpen(true)}>
            Add Friend
          </button>
        )}
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplit}
        />
      )}
    </div>
  );
}

export default App;
