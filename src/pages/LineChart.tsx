import { Box } from "@mui/material";
import Line from "../components/Line";
import Header from "../components/Header";

const LineChart = () => {
  return (
    <Box>
      <Header
        title="line chart"
        description="Track trends and analyze data over time with a dynamic line chart."
      />
      <Box sx={{ height: "70vh" }}>
        <Line />
      </Box>
    </Box>
  );
};

export default LineChart;
