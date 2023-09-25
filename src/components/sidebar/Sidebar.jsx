import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Support from "@mui/icons-material/Support";
import { Data } from "../../data/dataSidebar";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Sidebar = ({ children }) => {
  const navigation = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "1.5rem",
            }}
          >
            <Avatar
              sx={{
                width: 100,
                height: 100,
                bgcolor: "orange",
                marginBottom: "1rem",
              }}
            >
              HP
            </Avatar>
            <Typography variant="subtitle1" gutterBottom>
              Hello
            </Typography>
            <Typography marginBottom={"1.4rem"} variant="subtitle2">
              Hello
            </Typography>
          </Box>
          <Divider />
          <List>
            {Data.map((item, index) => (
              <ListItem key={item.title}>
                <ListItemButton
                  onClick={() => {
                    navigation(item.link);
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["Поддержка"].map((text, index) => (
              <ListItem key={text}>
                <ListItemButton>
                  <ListItemIcon>
                    <Support />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Sidebar;
