import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import Line from "../../components/Line";

const transactionsData = [
  {
    id: "01edfsda",
    name: "johndoe",
    date: "2021-05-07",
    price: 43.91,
  },
  {
    id: "01e555sda",
    name: "johndoe",
    date: "2021-05-07",
    price: 43.91,
  },
  {
    id: "43d6sda",
    name: "jackdower",
    date: "2022-08-01",
    price: 133.57,
  },
  {
    id: "0567fddd",
    name: "abderomea",
    date: "2021-09-21",
    price: 40.95,
  },
  {
    id: "08eggsdf",
    name: "goodmanva",
    date: "2021-01-07",
    price: 200.95,
  },
];

const Row2 = () => {
  const theme = useTheme();
  const renderTransactions = transactionsData.map(
    ({ date, id, name, price }) => {
      return (
        <Paper
          key={id}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1.5,
            p: 1,
          }}
        >
          <Box>
            <Typography variant="body1" sx={{ mb: "4px", fontWeight: "bold" }}>
              {id}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "13px" }}>
              {name}
            </Typography>
          </Box>
          <Typography sx={{ fontSize: "13px" }}>{date}</Typography>
          <Typography
            sx={{
              backgroundColor: theme.palette.error.main,
              fontSize: "13px",
              p: "2px",
              borderRadius: 1,
            }}
          >
            ${price.toLocaleString()}
          </Typography>
        </Paper>
      );
    }
  );
  return (
    <Stack
      direction={"row"}
      mt={3}
      rowGap={1.5}
      columnGap={5}
      flexWrap={"wrap"}
    >
      <Paper
        sx={{
          height: "380px",
          flexBasis: { xs: "100%", md: "69%" },
          padding: 1.5,
        }}
      >
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Box>
            <Typography
              variant="h6"
              sx={{ color: theme.palette.secondary.main, marginBottom: 1 }}
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "13px" }}>
              $59,342,32
            </Typography>
          </Box>
          <IconButton sx={{ borderRadius: 2, mr: 2 }}>
            <DownloadOutlinedIcon />
          </IconButton>
        </Stack>
        <Line isDashboard={true} />
      </Paper>
      <Box
        sx={{
          flexBasis: {
            xs: "100%",
            md: "28%",
            height: "380px",
            overflowY: "scroll",
          },
        }}
      >
        <Paper sx={{ padding: 1, color: theme.palette.secondary.main, mb: 2 }}>
          <Typography variant="h6">Recent Transactions</Typography>
        </Paper>
        {renderTransactions}
      </Box>
    </Stack>
  );
};

export default Row2;
