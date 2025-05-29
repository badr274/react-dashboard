import { useEffect, useState } from "react";
import { Backdrop, Box, Typography, Button, useTheme } from "@mui/material";

const ScreenSizeWarning = () => {
  const [showWarning, setShowWarning] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const checkScreenSize = () => {
      const isMobile = window.innerWidth <= 768;
      setShowWarning(isMobile);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!showWarning || dismissed) return null;

  return (
    <Backdrop open={true} sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}>
      <Box
        sx={{
          textAlign: "center",
          p: 4,
          borderRadius: 3,
          maxWidth: "90%",
          bgcolor:
            theme.palette.mode === "dark"
              ? "rgba(40, 40, 40, 0.9)"
              : "rgba(255, 255, 255, 0.9)",
          color:
            theme.palette.mode === "dark"
              ? theme.palette.grey[300]
              : theme.palette.grey[900],
          boxShadow: theme.shadows[24],
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          ⚠️ Please use a desktop device
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
          This website is best viewed on a larger screen.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setDismissed(true)}
        >
          Continue anyway
        </Button>
      </Box>
    </Backdrop>
  );
};

export default ScreenSizeWarning;
