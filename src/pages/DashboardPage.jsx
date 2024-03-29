import React, { useEffect } from "react";
import MainCard from "../components/card/MainCard";
import { Paper, Grid, Box } from "@mui/material";
import { BuildCircle, Image, Money, TimeToLeave } from "@mui/icons-material";
import ApartmentIcon from "@mui/icons-material/Apartment";

function DashboardPage() {
  useEffect(() => {});
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid container item spacing={1}>
            <Grid item xs={12} sm={6} md={3}>
              <MainCard title={"Баланс"} text={`$2400`} iconExample={Money} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <MainCard
                title={"Всего проектов"}
                text={`5`}
                iconExample={BuildCircle}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <MainCard
                title={"Ближайший дедлайн"}
                text={`24-09-2023`}
                iconExample={TimeToLeave}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <MainCard
                title={"Прогресс строительства"}
                text={`25%`}
                iconExample={ApartmentIcon}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default DashboardPage;
