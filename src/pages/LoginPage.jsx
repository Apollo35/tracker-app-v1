import { useState, useEffect } from "react";
import { signUp, signIn } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../services/authService";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function checkUser() {
      const user = await getCurrentUser();

      if (user) {
        navigate("/");
      }
    }

    checkUser();
  }, [navigate]);

  async function handleSignUp() {
    const { error } = await signUp(email, password);

    if (error) {
      alert(error.message);
      return;
    }

    navigate("/");
  }

  async function handleSignIn() {
    const { error } = await signIn(email, password);

    if (error) {
      alert(error.message);
      return;
    }

    navigate("/");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="border border-zinc-800 p-8 w-full max-w-md">
        <h1 className="text-3xl font-black uppercase mb-6">Login</h1>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-black border border-zinc-800 p-3"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-black border border-zinc-800 p-3"
          />

          <button
            onClick={handleSignUp}
            className="w-full border border-green-500 text-green-500 p-3"
          >
            Register
          </button>

          <button
            onClick={handleSignIn}
            className="w-full border border-zinc-600 p-3"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
