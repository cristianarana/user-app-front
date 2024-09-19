import {
  Box,
  Button,
  Container,
  Grid2,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";

type LoginData = {
  username: string,
  password: string
}


export const LoginPage: React.FC<{}> = () => {

  const [loginData, setLoginData] = useState<LoginData>({
    username:"",
    password:"",
  });

  const dataChage = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginData({...loginData, [event.target.name]: event.target.value});
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //agregar funcionalidad graphql de login
    console.log(loginData);
  }

  return (
    <Container maxWidth="sm">
      <Grid2
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        minHeight={"100vh"}
      >
        <Grid2>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography variant="h4"> Iniciar Sesión</Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField name="username" fullWidth type="text" label="email" sx={{ mt: 2, mb: 1.5 }} onChange={dataChage} />
              <TextField name="password" fullWidth type="password" label="password" sx={{ mt: 1.5, mb: 1.5 }} onChange={dataChage}/>
              <Button fullWidth type="submit" variant="contained" sx={{ mt: 1.5, mb: 3 }} >
                {" "}
                Iniciar{" "}
              </Button>
            </Box>
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
};
