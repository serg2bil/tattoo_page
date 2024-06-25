import * as React from "react";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import TextField from "@mui/material/TextField";




export default function CustomizedInputsStyled() {
  const { t } = useTranslation('home')
  return (
    <Box
    component="form"
    noValidate
    >
        <Box
        sx={{
            display:'flex',
            flexWrap: 'wrap',
            gap: "0 72px",
            marginBottom:'43px'
        }}
        >
      <TextField
      label= {t('contact.form.label.input1')}
      variant="standard"
      
      sx={{
        width:'100%',
        "& .MuiInput-root": {
          paddingBottom:"10px",
          color: "#000",
          fontFamily: "Arial",
          fontWeight: "bold",
          // Bottom border
          "&:before": {
            borderColor: "#fff",
            borderWidth: "2px",
          },
          // Border on focus
          "&:after": {
            borderColor: "#fff",
            borderWidth: "3px",
          },
          ":hover:not(.Mui-focused)": {
            "&:before": {
              borderColor: "#e7e7e7",
              borderWidth: "2px",
            },
          },
        },
        // Label
        "& .MuiInputLabel-standard": {
          color: "rgba(255, 255, 255, 0.7)",
          fontFamily: '"Montserrat", sans-serif',
            fontWeight: "300",
            fontSize: "24px",
            lineHeight: "120%",
          
          "&.Mui-focused": {
            color: "rgba(255, 255, 255, 0.7)",
          },
        },
      }}
    />
    <TextField
      label= {t('contact.form.label.input2')}
      variant="standard"
      
      sx={{
        "&.MuiFormLabel-root":{
          marginBottom:"10px",

        },
        width:'100%',
        
        "& .MuiInput-root": {
          paddingBottom:"10px",
          color: "#000",
          fontFamily: "Arial",
          fontWeight: "bold",
          // Bottom border
          "&:before": {
            borderColor: "#fff",
            borderWidth: "2px",
          },
          // Border on focus
          "&:after": {
            borderColor: "#fff",
            borderWidth: "3px",
          },
          ":hover:not(.Mui-focused)": {
            "&:before": {
              borderColor: "#e7e7e7",
              borderWidth: "2px",
            },
          },
        },
        // Label
        "& .MuiInputLabel-standard": {
          color: "rgba(255, 255, 255, 0.7)",
          fontFamily: '"Montserrat", sans-serif',

            fontWeight: "300",
            fontSize: "24px",
            lineHeight: "120%",
          "&.Mui-focused": {
            color: "rgba(255, 255, 255, 0.7)",
          },
        },
      }}
    />
    </Box>
    <TextField
      label= {t('contact.form.label.input3')}
      variant="standard"
      fullWidth
      sx={{
        
        "& .MuiInput-root": {
          paddingBottom:"10px",
          color: "#000",
          fontFamily: "Arial",
          fontWeight: "bold",
          // Bottom border
          "&:before": {
            borderColor: "#fff",
            borderWidth: "2px",
          },
          // Border on focus
          "&:after": {
            borderColor: "#fff",
            borderWidth: "3px",
          },
          ":hover:not(.Mui-focused)": {
            "&:before": {
              borderColor: "#e7e7e7",
              borderWidth: "2px",
            },
          },
        },
        // Label
        "& .MuiInputLabel-standard": {
          color: "rgba(255, 255, 255, 0.7)",
          fontFamily: '"Montserrat", sans-serif',
            fontWeight: "300",
            fontSize: "24px",
            lineHeight: "120%",
          
          "&.Mui-focused": {
            color: "rgba(255, 255, 255, 0.7)",
          },
        },
      }}
    />
    </Box>
  );
}
