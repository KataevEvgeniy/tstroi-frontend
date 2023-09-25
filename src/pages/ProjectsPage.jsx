import { Paper } from "@mui/material";
import React from "react";
import MainCard from "../components/card/MainCard";
import { Construction } from "@mui/icons-material";

function ProjectsPage() {
  return (
    <Paper>
      <MainCard
        title={"Project"}
        text={"Hello"}
        buttonText={"Перейти"}
        iconExample={Construction}
      />
    </Paper>
  );
}

export default ProjectsPage;
