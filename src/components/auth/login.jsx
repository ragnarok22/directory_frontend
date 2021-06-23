import axios from "axios";
import { useState } from "react";
import { React } from "react";
import "./login.css";
import { setToken } from "../../security";
import { useHistory } from "react-router";

export const Login = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data, status } = await axios.post("/auth/signin", {
        username,
        password,
      });
      if (status === 201) {
        setToken(data.accessToken);
        history.push("/dashboard");
      }
    } catch (error) {
      const status = error.response.status;
      if (status === 400) {
        setMessages([
          ...messages,
          {
            type: "error",
            message: "Usuario o contraseña incorrectos",
          },
        ]);
      } else {
        console.error(error.response);
      }
    }
    setLoading(false);
  };
  return (
    <div>
      {messages.length > 0 && (
        <div className="messages">
          <ul>
            {messages.map((message, i) => (
              <li key={i} className={message.type}>
                {message.message}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex w-screen h-screen justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="contaseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{loading ? "loading" : "Entrar"}</button>
        </form>
      </div>
    </div>
  );
};
