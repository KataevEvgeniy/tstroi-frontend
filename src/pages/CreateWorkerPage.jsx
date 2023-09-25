import React from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";

function CreateWorkerPage() {
  return (
    <Paper>
      <Stack direction={"row"} display={"flex"} alignContent={"center"}>
        <Box
          sx={{
            height: "10%",
            width: "100%",
            backgroundColor: "primary.dark",
            opacity: [0.9, 0.8, 0.7],
            marginBottom: 5,
          }}
        >
          <Typography
            padding={1}
            textAlign={"center"}
            alignItems={"center"}
            color={"white"}
            fontSize={30}
          >
            Добавить
          </Typography>
        </Box>
      </Stack>
      <Stack
        display={"flex"}
        direction={"column"}
        alignItems={"center"}
        flexGrow={1}
        spacing={3}
      >
        <TextField
          id="outlined-basic"
          label="Имя"
          variant="outlined"
          style={{ width: "60%" }}
        />
        <TextField
          id="outlined-basic"
          label="Фамилия"
          variant="outlined"
          style={{ width: "60%" }}
        />
        <TextField
          id="outlined-basic"
          label="Отчество"
          variant="outlined"
          style={{ width: "60%" }}
        />
        <TextField
          id="outlined-basic"
          label="Исполнитель"
          variant="outlined"
          style={{ width: "60%" }}
        />
        <TextField
          id="outlined-basic"
          label="Номер телефона"
          variant="outlined"
          style={{ width: "60%" }}
        />
        <TextField
          id="outlined-basic"
          label="Логин"
          variant="outlined"
          style={{ width: "60%" }}
        />
        <TextField
          id="outlined-basic"
          label="Пароль"
          variant="outlined"
          style={{ width: "60%" }}
        />
        <Button variant="contained" color="success" sx={{ width: "60%" }}>
          Изменить
        </Button>
      </Stack>
    </Paper>
  );
}

export default CreateWorkerPage;
