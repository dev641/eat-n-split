import { useState } from "react";
const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [myExpenses, setMyExpenses] = useState("");
  const [friendExpenses, setFriendExpenses] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("");

  return (
    <form
      className="form-split-bill"
      onSubmit={(e) => {
        e.preventDefault();
        if (!bill || !myExpenses) return;
        onSplitBill(whoIsPaying === "user" ? friendExpenses : -myExpenses);
        setBill("");
        setMyExpenses("");
        setFriendExpenses("");
        setWhoIsPaying("");
      }}
    >
      <label>💰 Bill Value</label>
      <input
        type="text"
        onChange={(e) => setBill(+e.target.value)}
        value={bill}
      />
      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        onChange={(e) => {
          const expenses = +e.target.value;
          if (!isNaN(expenses)) {
            setMyExpenses(expenses);
            setFriendExpenses(bill - expenses);
          }
        }}
        value={myExpenses}
      />
      <label>👫 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={friendExpenses} />
      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value={selectedFriend.id}>{selectedFriend.name}</option>
      </select>
      <button className="button">Split</button>
    </form>
  );
};

export default FormSplitBill;
