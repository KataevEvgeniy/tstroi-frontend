import React, { useState } from "react";
import Button from "../../UI/button/Button";
import Input from "../../UI/input/Input";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ login: "", password: "" });
  return (
    <section
      className="w-96 py-16 px-16 flex flex-col bg-white rounded-lg"
      style={{
        backgroundImage: "",
      }}
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-center text-neutral-800 text-2xl font-medium font-['Roboto'] ">
          Войти в ТСТРОЙ
        </h2>
        <p className="text-center text-zinc-400 text-sm font-normal font-['Roboto']">
          Вход на платформу
        </p>
      </div>
      <form className="mt-12 flex flex-col gap-4">
        <Input
          placeholder={"email"}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, login: e.target.value }))
          }
        />
        <Input
          placeholder={"password"}
          onChange={(e) =>
            setUserData((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
        />
        <Button
          onClick={(e) => {
            e.preventDefault();
            console.log(userData);
            navigate("/dashboard", { replace: true });
          }}
        >
          Войти
        </Button>
        <span className="text-neutral-400 text-center">
          <a href="#" className="underline">
            Зарегистрироваться
          </a>
        </span>
      </form>
    </section>
  );
};

export default LoginForm;
