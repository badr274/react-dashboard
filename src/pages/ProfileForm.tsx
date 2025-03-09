import { Alert, Box, Button, MenuItem, TextField } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import Header from "../components/Header";

const roles = ["User", "Admin", "Manager"];

interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
}

const ProfileForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const onSubmit: SubmitHandler<IForm> = () => {
    setIsOpen(true);
  };
  const handleClose = () => setIsOpen(false);
  return (
    <Box>
      <Header
        title="Add New User"
        description="Enter user details to create a new account and set permissions.






"
      />
      <Box
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      >
        <Box sx={{ display: "flex", gap: 3 }}>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            sx={{ flex: 1 }}
            {...register("firstName", { required: true, minLength: 2 })}
            error={Boolean(errors["firstName"])}
            helperText={`${
              errors["firstName"] ? "Minimum length must be two characters" : ""
            }`}
          />

          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            sx={{ flex: 1 }}
            {...register("lastName", { required: true, minLength: 2 })}
            error={Boolean(errors["lastName"])}
            helperText={`${
              errors["lastName"] ? "Minimum length must be two characters" : ""
            }`}
          />
        </Box>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          {...register("email", {
            required: true,
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
          })}
          error={Boolean(errors["email"])}
          helperText={`${
            errors["email"] ? "Valid contact email required" : ""
          }`}
        />
        <TextField
          id="outlined-basic"
          label="Contact Number"
          variant="outlined"
          {...register("contactNumber", {
            required: true,
            pattern: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
          })}
          error={Boolean(errors["contactNumber"])}
          helperText={`${
            errors["contactNumber"] ? "Valid contact number required" : ""
          }`}
        />

        <TextField id="outlined-basic" label="Address" variant="outlined" />
        <TextField id="outlined-basic" label="Address" variant="outlined" />
        <TextField
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="User"
          helperText="Please select your role"
        >
          {roles.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <Button
          type="submit"
          variant="contained"
          sx={{ width: "fit-content", marginLeft: "auto" }}
        >
          Create New User
        </Button>
      </Box>
      <Snackbar
        open={isOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success">The user add successfully!</Alert>
      </Snackbar>
    </Box>
  );
};

export default ProfileForm;
