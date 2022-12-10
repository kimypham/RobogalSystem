import React from "react";
import LoginForm from "../components/LoginForm";
import LogoBar from "../components/LogoBar";

type Props = {};

function Login(props: Props) {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-blue-400 to-blue-200 min-h-screen">
      {/* login container */}
      <div className="h-full flex flex-col">
        <div>
          <LogoBar />
        </div>
        {/* Form container */}
        <div className="h-full flex items-center justify-center">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}

export default Login;
