import { Box } from "@mui/material";
import Pie from "../components/Pie";
import Header from "../components/Header";

const PieChart = () => {
  return (
    <Box>
      <Header
        title="pie chart"
        description="Get a clear breakdown of data proportions with an interactive pie chart."
      />
      <Box sx={{ height: "70vh" }}>
        <Pie />
      </Box>
    </Box>
  );
};

export default PieChart;
