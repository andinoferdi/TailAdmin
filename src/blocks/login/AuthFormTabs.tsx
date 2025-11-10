"use client";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { useState } from "react";

export default function AuthFormTabs() {
  const [isLogin, setIsLogin] = useState(true);

  return isLogin ? (
    <SignInForm onSwitchToRegister={() => setIsLogin(false)} />
  ) : (
    <SignUpForm onSwitchToLogin={() => setIsLogin(true)} />
  );
}

