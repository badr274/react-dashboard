import { Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../components/Pie";
import MyBar from "../../components/Bar";
import Geography from "../../components/Geography";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={1.3}
      height={"480px"}
      mt={5}
      pb={10}
    >
      <Paper sx={{ flex: 1, minWidth: "400px", p: 2 }}>
        <Typography
          variant="h6"
          sx={{ color: theme.palette.secondary.main, mb: 2 }}
        >
          Campaign
        </Typography>
        <Pie isDashboard={true} />
      </Paper>
      <Paper sx={{ flex: 1, minWidth: "400px", p: 2 }}>
        <Typography
          variant="h6"
          sx={{ color: theme.palette.secondary.main, mb: 2 }}
        >
          Sales Quantity
        </Typography>
        <MyBar isDashboard={true} />
      </Paper>
      <Paper
        sx={{
          flex: 1,
          minWidth: "400px",
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: theme.palette.secondary.main, mb: 2 }}
        >
          Geography
        </Typography>
        <Geography isDashboard={true} />
      </Paper>
    </Stack>
  );
};

export default Row3;
