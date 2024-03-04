import { useState } from "react";
const FormAddFriend = ({ onAddFriends }) => {
  const initial = {
    id: +`${new Date().getTime().toString().slice(0, 3)}${Math.round(
      Math.random() * 1000
    )}`,
    name: "",
    image: "",
    balance: 0,
  };
  const [friend, setFriend] = useState(initial);
  const { name, image } = friend;
  return (
    <form className="form-add-friend">
      <label>👫 Friend name</label>
      <input
        type="text"
        onChange={(e) => setFriend({ ...friend, name: e.target.value })}
        value={friend.name}
      />
      <label>🌄 Image URL</label>
      <input
        type="text"
        onChange={(e) => setFriend({ ...friend, image: e.target.value })}
        value={friend.image}
      />
      <button
        className="button"
        onClick={(e) => {
          e.preventDefault();
          if (!name || !image) return;
          onAddFriends(friend);
          setFriend(initial);
        }}
      >
        Add
      </button>
    </form>
  );
};

export default FormAddFriend;
