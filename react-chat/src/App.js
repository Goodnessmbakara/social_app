import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";

const API_URL = "http://127.0.0.1:8000/api/messages";

function App() {
  const [username, setUsername] = useState("username");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    Pusher.logToConsole = true;

    const pusher = new Pusher("ad58750553d6d7d27b7c", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("chat");

    channel.bind("message", function (data) {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      // Clean up Pusher subscriptions when the component unmounts
      channel.unbind("message");
      pusher.unsubscribe("chat");
    };
  }, []);

  const submit = async (e) => {
    e.preventDefault();

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        message,
      }),
    });

    // Assuming you have access to the Pusher instance
    //pusher.trigger("chat", "message", { username, message });

    setMessage("");
  };

  return (
    <div className="container">
      <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary">
        <div className="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom">
          <input
            className="fs-5 fw-semibold"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="list-group list-group-flush border-bottom scrollarea">
          {messages.map((message) => (
            <div
              key={message.id}
              className="list-group-item list-group-item-action py-3 lh-sm"
            >
              <div className="d-flex w-100 align-items-center justify-content-between">
                <strong className="mb-1">{message.username}</strong>
              </div>
              <div className="col-10 mb-1 small">{message.message}</div>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={(e) => submit(e)}>
        <input
          className="form-control"
          placeholder="write a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  );
}

export default App;
