import { Box } from "@mui/material";
import Geography from "../components/Geography";
import Header from "../components/Header";

const GeographyChart = () => {
  return (
    <Box>
      <Header
        title="geography cart"
        description=" Visualize location-based data with an interactive geographic map."
      />
      <Box sx={{ height: "90vh" }}>
        <Geography />
      </Box>
    </Box>
  );
};

export default GeographyChart;
