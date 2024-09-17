import { Button, Container } from "@mui/material";
import { HeaderComponent } from "../../components";

export const HomePage: React.FC<{}> = () => {
  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <HeaderComponent
        title="Hola mundo"
        description="programacion en practica"
      />
    </Container>
  );
};
