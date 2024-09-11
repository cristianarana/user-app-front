import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

type ThemeProps = {
    children: JSX.Element;
}

enum themePalette {
    BG = "#f0cfa9",
    Yellow = "#f8ed03",
    FONT_GLOBAL= "'Noto Sans', sans-serif",
}

const theme = createTheme({
    palette:{
        mode:"dark",
        background:{
            default:themePalette.BG,
        },
        primary: {
            main: themePalette.Yellow,
        }
    },
    typography:{
        fontFamily: themePalette.FONT_GLOBAL,
    },
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform: "none",
                    boxShadow: "none",
                    borderRadius: "0.5 em"
                }
            }
        }
    }
})

export const ThemeConfig: React.FC<ThemeProps> = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}