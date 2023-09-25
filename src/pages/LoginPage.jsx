import React, { useState } from "react";
import LoginForm from "../components/register/LoginForm";

function LoginPage() {
  return (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <LoginForm />
    </div>
  );
}

export default LoginPage;
