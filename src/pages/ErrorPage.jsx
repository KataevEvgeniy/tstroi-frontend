import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useRouteError } from "react-router-dom";
import React from "react";

function ErrorPage() {
  let error = useRouteError();
  console.error(error);
  return (
    <Paper>
      <Typography>Ой, случилась какая-то ошибка</Typography>
    </Paper>
  );
}

export default ErrorPage;
