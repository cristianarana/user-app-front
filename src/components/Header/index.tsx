import { Box, Grid, Typography } from "@mui/material";
import React from "react";

type HeaderProps = {
  title: string;
  description: string;
  element?: React.ReactNode | null;
};

export const HeaderComponent = ({
  title,
  description,
  element,
}: HeaderProps) => {
  return (
    <div>
      <Box sx={{ width: "100%", height: "350px" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid item xs={5}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ height: "100%" }}
            >
              <Grid item>
                <Typography variant="h2">{title}</Typography>
              </Grid>
              <Grid item>
                <Typography>{description}</Typography>
              </Grid>
              <Grid item>
                {element !== undefined && (
                  <Grid item sx={{ mt: 4 }}>
                    {element}
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

    </div>
  );
};
