import { useState } from "react";

const PasswordGate = ({ correctPassword, children }) => {
  const [input, setInput] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === correctPassword) {
      setAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (authenticated) return children;

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-red-100">
      <h1 className="text-3xl font-bold mb-4 text-rose-600">Enter the Secret Password 💌</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <input
          type="password"
          placeholder="Password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-2 rounded border border-pink-300 w-64 text-center"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-rose-500 text-white rounded hover:bg-rose-600"
        >
          Enter
        </button>
      </form>
    </div>
  );
};

export default PasswordGate;
