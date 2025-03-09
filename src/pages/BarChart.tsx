import { Box } from "@mui/material";
import MyBar from "../components/Bar";
import Header from "../components/Header";

const BarChart = () => {
  return (
    <Box>
      <Header
        title="bar chart"
        description="Visualize data trends and comparisons with an interactive bar chart."
      />
      <Box sx={{ height: "75vh" }}>
        <MyBar />
      </Box>
    </Box>
  );
};

export default BarChart;
