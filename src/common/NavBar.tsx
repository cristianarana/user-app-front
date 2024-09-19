import {
  AppBar,
  Box,
  Button,
  Container,
  Grid2,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const NavBar: React.FC<{}> = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid2
              container
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Grid2>
                  <Typography onClick={() => navigate("/")}>
                    User-App
                    </Typography>
              </Grid2>
              <Grid2>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" onClick={() => navigate("login")}>
                    Login
                  </Button>
                  <Button variant="outlined">Register</Button>
                </Stack>
              </Grid2>
            </Grid2>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
