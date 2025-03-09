import { Box, Typography, useTheme } from "@mui/material";

interface IProps {
  title: string;
  description?: string;
  isDashboard?: boolean;
}

const Header = ({ title, description, isDashboard }: IProps) => {
  const theme = useTheme();
  return (
    <Box mb={!isDashboard ? 4 : 0}>
      <Typography
        variant="h5"
        color={theme.palette.info.light}
        fontWeight={"bold"}
        textTransform={"uppercase"}
      >
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </Box>
  );
};

export default Header;
