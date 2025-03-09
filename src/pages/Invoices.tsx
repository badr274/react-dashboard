import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { invoicesRows } from "../data";
import Header from "../components/Header";
const invoicesColumns: GridColDef<(typeof invoicesRows)[number]>[] = [
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
    field: "phone",
    headerName: "Phone",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "cost",
    headerName: "Cost",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "date",
    headerName: "Date",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    headerAlign: "center",
    align: "center",
  },
];
const Invoices = () => {
  return (
    <Box
      sx={{
        height: 650,
        width: "98%",
        mx: "auto",
      }}
    >
      <Header title="invoices" description="Control invoices" />
      <DataGrid
        rows={invoicesRows}
        columns={invoicesColumns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
};

export default Invoices;
