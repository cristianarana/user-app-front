import {
  AppBar,
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

export const NavBar: React.FC<{}> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid2
              container
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Grid2>
                <Typography>User-App</Typography>
              </Grid2>
              <Grid2>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained">Login</Button>
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
