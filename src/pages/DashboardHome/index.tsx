import { Box, Button, Stack } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";

const DashboardHome = () => {
  return (
    <Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Header
          title="dashboard"
          description="Welcome to your dashboard"
          isDashboard={true}
        />
        <Box sx={{ textAlign: "end" }}>
          <Button
            variant="contained"
            sx={{ padding: "6px 8px", textTransform: "capitalize" }}
          >
            <DownloadOutlinedIcon />
            <span>Download Reports</span>
          </Button>
        </Box>
      </Stack>
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
};

export default DashboardHome;
