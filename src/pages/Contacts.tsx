import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { contactsRows } from "../data";
import Header from "../components/Header";
const contactsColumns: GridColDef<(typeof contactsRows)[number]>[] = [
  {
    field: "id",
    headerName: "ID",
    width: 35,
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
    width: 45,
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
    field: "address",
    headerName: "Address",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    headerAlign: "center",
    align: "center",
    display: "flex",
  },
  {
    field: "city",
    headerName: "City",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    headerAlign: "center",
    align: "center",
    display: "flex",
  },
  {
    field: "zipCode",
    headerName: "Zip Code",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    headerAlign: "center",
    align: "center",
    display: "flex",
  },
];
const Contacts = () => {
  return (
    <Box
      sx={{
        height: 650,
        width: "98%",
        mx: "auto",
      }}
    >
      <Header
        title="contact information"
        description="Check contacts information"
      />
      <DataGrid
        rows={contactsRows}
        columns={contactsColumns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
};

export default Contacts;
