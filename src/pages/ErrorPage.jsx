import { useRouteError } from "react-router-dom";
import React from "react";

function ErrorPage() {
  let error = useRouteError();
  console.error(error);
  return (
    <div className="flex items-center justify-center flex-col text-stone-700 mt-16">
      <h1 className="text-3xl font-extrabold">Oops!</h1>
      <p>Произошла ошибка</p>
      <p>
        <i>{error.statusText}</i>
      </p>
      <a className="text-blue-500 underline" href="/dashboard">
        Get back to the main page
      </a>
    </div>
  );
}

export default ErrorPage;
