import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import TrafficIcon from "@mui/icons-material/Traffic";
import { ResponsivePie } from "@nivo/pie";
import {
  smallPieChartData1,
  smallPieChartData2,
  smallPieChartData3,
  smallPieChartData4,
} from "../../data";
const row1Data = [
  {
    icon: <MailIcon />,
    number: "12,361",
    title: "Emails sent",
    percentage: 14,
    chart: (
      <ResponsivePie
        data={smallPieChartData1}
        margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
        theme={{
          tooltip: {
            wrapper: {},
            container: {
              background: "#000000",
              color: "white",
              fontSize: 10,
            },
          },
        }}
        innerRadius={0.7}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: "nivo" }}
        activeOuterRadiusOffset={8}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
      />
    ),
  },
  {
    icon: <PersonAddIcon />,
    number: "431,225",
    title: "Save obtained",
    percentage: 21,
    chart: (
      <ResponsivePie
        data={smallPieChartData2}
        margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
        theme={{
          tooltip: {
            wrapper: {},
            container: {
              background: "#000000",
              color: "white",
              fontSize: 10,
            },
          },
        }}
        innerRadius={0.7}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: "accent" }}
        activeOuterRadiusOffset={8}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
      />
    ),
  },
  {
    icon: <PointOfSaleIcon />,
    number: "32.441",
    title: "New clients",
    percentage: 5,
    chart: (
      <ResponsivePie
        data={smallPieChartData3}
        margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
        theme={{
          tooltip: {
            wrapper: {},
            container: {
              background: "#000000",
              color: "white",
              fontSize: 10,
            },
          },
        }}
        innerRadius={0.7}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: "brown_blueGreen" }}
        activeOuterRadiusOffset={8}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
      />
    ),
  },
  {
    icon: <TrafficIcon />,
    number: "1,325,134",
    title: "Traffic received",
    percentage: 43,
    chart: (
      <ResponsivePie
        data={smallPieChartData4}
        theme={{
          tooltip: {
            wrapper: {},
            container: {
              background: "#000000",
              color: "white",
              fontSize: 10,
            },
          },
        }}
        margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
        innerRadius={0.7}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: "category10" }}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
      />
    ),
  },
];
const Row1 = () => {
  const theme = useTheme();
  const renderRow1 = row1Data.map(
    ({ icon, number, title, percentage, chart }, idx) => {
      return (
        <Paper
          key={idx}
          sx={{
            flex: 1,
            padding: 1.5,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Stack direction={"column"} gap={0.8}>
            <Box sx={{ color: theme.palette.secondary.main }}>{icon}</Box>
            <Typography variant="body2" sx={{ fontSize: "13px" }}>
              {number}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "13px", textWrap: "nowrap" }}
            >
              {title}
            </Typography>
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Box height={"60px"} width={"60px"}>
              {chart}
            </Box>
            <Typography variant="body2" sx={{ fontSize: "13px" }}>
              +{percentage}%
            </Typography>
          </Stack>
        </Paper>
      );
    }
  );
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1.5} mt={3}>
      {renderRow1}
    </Stack>
  );
};

export default Row1;
