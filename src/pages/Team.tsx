import { Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { teamRows } from "../data";
import Header from "../components/Header";

const Team = () => {
  const theme = useTheme();
  const teamColumns: GridColDef<(typeof teamRows)[number]>[] = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "access",
      headerName: "Access",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      headerAlign: "center",
      align: "center",
      display: "flex",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
              padding: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              color: "white",
            }}
          >
            {access === "Admin" ? (
              <AdminPanelSettingsOutlinedIcon fontSize="small" />
            ) : access === "Manager" ? (
              <SecurityOutlinedIcon fontSize="small" />
            ) : (
              <LockOpenIcon fontSize="small" />
            )}
            <Typography sx={{ fontSize: "13px" }}>{access}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 650,
        width: "98%",
        mx: "auto",
      }}
    >
      <Header title="team" description="Managing the team members" />
      <DataGrid
        rows={teamRows}
        columns={teamColumns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default Team;
