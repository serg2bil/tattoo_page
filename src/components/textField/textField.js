import * as React from "react";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import style from "@/styles/Home.module.css";

export default function CustomizedInputsStyled() {
  const { t } = useTranslation("home");

  // State to store input values
  const [inputValues, setInputValues] = React.useState({
    Name: "",
    Email: "",
    Message: "",
  });

  // State to manage form validation
  const [formErrors, setFormErrors] = React.useState({
    Name: false,
    Email: false,
    Message: false,
  });

  // Function to check if all required fields are filled
  const validateForm = () => {
    const { Name, Email, Message } = inputValues;
    const errors = {
      Name: Name.trim() === "",
      Email: Email.trim() === "",
      Message: Message.trim() === "",
    };
    setFormErrors(errors);
    return !errors.Name && !errors.Email && !errors.Message;
  };

  // Event handler for input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Event handler for button click
  const handleButtonClick = () => {
    const isValid = validateForm();
    if (isValid) {
      console.log("Submitting data:", " Name: ", inputValues.Name, " Email: ", inputValues.Email, " Message: ", inputValues.Message);
      alert("Submitting data: ", " Name: ", inputValues.Name, " Email: ", inputValues.Email, " Message: ", inputValues.Message);
      
      
    } else {
      alert("Please fill in all required fields.");
      
    }
  };

  return (
    <Box component="form" noValidate>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0 72px",
          marginBottom: "43px",
        }}
      >
        <TextField
          label={t("contact.form.label.input1")}
          variant="standard"
          name="Name"
          value={inputValues.Name}
          onChange={handleInputChange}
          error={formErrors.Name}
          required
          sx={{
            width: "100%",
            marginBottom: "15px",
            "& .MuiInput-root": {
              color: "#fff !important",
              fontFamily: "Montserrat",
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
          label={t("contact.form.label.input2")}
          variant="standard"
          name="Email"
          value={inputValues.Email}
          onChange={handleInputChange}
          error={formErrors.Email}
          required
          sx={{
            "&.MuiFormLabel-root": {
              marginBottom: "10px",
            },
            width: "100%",
            "& .MuiInput-root": {
              color: "#fff",
              fontFamily: "Montserrat",
              // Bottom border
              "&:before": {
                borderColor: "#fff",
                borderWidth: "2px",
              },
              // Border on focus
              "&:after": {
                borderColor: "#fff !important",
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
        label={t("contact.form.label.input3")}
        variant="standard"
        fullWidth
        name="Message"
        value={inputValues.Message}
        onChange={handleInputChange}
        error={formErrors.Message}
        required
        sx={{
          "& .MuiInput-root": {
            color: "#fff",
            fontFamily: "Montserrat",
            // Bottom border
            "&:before": {
              borderColor: "#fff ",
              borderWidth: "2px",
            },
            // Border on focus
            "&:after": {
              borderColor: "#fff !important",
              borderWidth: "3px",
            },
            ":hover:not(.Mui-focused)": {
              "&:before": {
                borderColor: "#e7e7e7 ",
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
      <Button
        className={style.button}
        sx={{
          marginTop: "40px",
          "&.MuiButton-text": {
            fontFamily: " 'Montserrat', sans-serif",
            fontWeight: " 500",
            fontSize: "24px",
            textAlign: "center",
            color: "#fff",
            textTransform: "none",
          },
        }}
        onClick={handleButtonClick}
      >
        {t("buttonSend")}
      </Button>
    </Box>
  );
}
