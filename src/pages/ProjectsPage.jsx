import {
  Paper,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProjectsPage() {
  const navigate = useNavigate();
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/getAllProjects", {})
      .then(function (response) {
        setProjectList(response.data);
      });
  }),
    [projectList];
  return (
    <Card sx={{ maxWidth: 1592 }}>
      <CardMedia
        sx={{ height: 284 }}
        image="/static/images/1.png"
        title="construction"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          ТСТРОЙ
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Проекты
        </Typography>
        <Button
          style={{ marginLeft: "1400px", marginTop: "20px" }}
          variant="contained"
          color="success"
          sx={{ mb: 5 }}
          onClick={() => {
            navigate("create");
          }}
        >
          Новый проект
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProjectsPage;
