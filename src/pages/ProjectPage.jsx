import React from "react";
import MainCard from "../components/card/MainCard";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { useEffect } from "react";

function ProjectPage({
  fullName,
  workName,
  dateStart,
  dateEnd,
  address,
  index,
  workerCount,
  persentProgress,
}) {
  useEffect(() => {});
  function getProjectData(id) {
    return 0;
  }
  return (
    <Paper elevation={3} sx={{ padding: "10px" }}>
      <Grid container>
        <Grid item xs={9} padding="30px">
          <List>
            <ListItem sx={{ borderBottom: "1px solid black " }}>
              <List>
                <Paper elevation={0} sx={{ color: "gray" }}>
                  Полное наименование проекта:
                </Paper>
                <Paper elevation={0} sx={{ color: "black" }}>
                  {fullName}
                </Paper>
              </List>
            </ListItem>
            <ListItem sx={{ borderBottom: "1px solid black " }}>
              <List>
                <Paper elevation={0} sx={{ color: "gray" }}>
                  Рабочее наименование проекта:
                </Paper>
                <Paper elevation={0} sx={{ color: "black" }}>
                  {workName}
                </Paper>
              </List>
            </ListItem>
            <ListItem sx={{ borderBottom: "1px solid black " }}>
              <List>
                <Paper elevation={0} sx={{ color: "gray" }}>
                  Дата начала проекта:
                </Paper>
                <Paper elevation={0} sx={{ color: "black" }}>
                  {dateStart}
                </Paper>
              </List>
            </ListItem>
            <ListItem sx={{ borderBottom: "1px solid black " }}>
              <List>
                <Paper elevation={0} sx={{ color: "gray" }}>
                  Планируемая дата окончания проекта:
                </Paper>
                <Paper elevation={0} sx={{ color: "black" }}>
                  {dateEnd}
                </Paper>
              </List>
            </ListItem>
            <ListItem sx={{ borderBottom: "1px solid black " }}>
              <List>
                <Paper elevation={0} sx={{ color: "gray" }}>
                  Адрес проекта:
                </Paper>
                <Paper elevation={0} sx={{ color: "black" }}>
                  {address}
                </Paper>
              </List>
            </ListItem>
            <ListItem sx={{ borderBottom: "1px solid black " }}>
              <List>
                <Paper elevation={0} sx={{ color: "gray" }}>
                  Индекс:
                </Paper>
                <Paper elevation={0} sx={{ color: "black" }}>
                  {index}
                </Paper>
              </List>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={3}>
          <List sx={{ alignItems: "center" }}>
            <ListItem>
              <Paper
                elevation={0}
                sx={{ padding: "10px", border: "1px solid " }}
              >
                <CardMedia
                  component="img"
                  alt="Image"
                  height="200"
                  sx={{ borderRadius: "5px" }}
                  image="https://static.tildacdn.com/tild6631-3231-4239-a231-393263656334/strahovanie-stroitel.jpg"
                />
              </Paper>
            </ListItem>
            <ListItem>
              <MainCard
                title="Бюджет"
                text={persentProgress + " P"}
                iconExample={ApartmentIcon}
              ></MainCard>
            </ListItem>
            <ListItem>
              <MainCard
                title="Общий Прогресс"
                text={persentProgress + "%"}
                iconExample={ShowChartIcon}
              ></MainCard>
            </ListItem>
            <ListItem>
              <MainCard
                title="Участники"
                text={workerCount + " человек"}
                iconExample={EngineeringIcon}
              ></MainCard>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ProjectPage;
