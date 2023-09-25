import { Paper } from "@mui/material";
import React from "react";
import MainCard from "../components/card/MainCard";

function ProjectsPage() {
  return (
    <Paper>
      <MainCard title={"Project"} text={"Hello"} buttonText={"Перейти"} />
    </Paper>
  );
}

export default ProjectsPage;
