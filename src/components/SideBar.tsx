import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MuiDrawer from "@mui/material/Drawer";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

interface ISidebar {
  open: boolean;
  handleDrawerClose: () => void;
}
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { grey } from "@mui/material/colors";
import adminAvatar from "../assets/Gon.jpeg";
import { useLocation, useNavigate } from "react-router-dom";
import { Avatar, Tooltip, Typography } from "@mui/material";
import { useColorMode } from "../context/ThemeContext";
const array1 = [
  {
    name: "Dashboard",
    icon: <HomeOutlinedIcon />,
    path: "/",
  },
  {
    name: "Manage Team",
    icon: <PeopleAltOutlinedIcon />,
    path: "/team",
  },
  {
    name: "Contacts Information",
    icon: <ContactsOutlinedIcon />,
    path: "/contacts",
  },
  {
    name: "Invoices Balances",
    icon: <ReceiptOutlinedIcon />,
    path: "/invoices",
  },
];
const array2 = [
  {
    name: "Profile Form",
    icon: <PersonOutlineOutlinedIcon />,
    path: "/form",
  },
  {
    name: "Calendar",
    icon: <CalendarTodayOutlinedIcon />,
    path: "/calendar",
  },
  {
    name: "FAQ Page",
    icon: <HelpOutlineOutlinedIcon />,
    path: "/faq",
  },
];
const array3 = [
  {
    name: "Bar Chart",
    icon: <BarChartOutlinedIcon />,
    path: "/bar",
  },
  {
    name: "Pie Chart",
    icon: <PieChartOutlineOutlinedIcon />,
    path: "/pie",
  },
  {
    name: "Line Chart",
    icon: <ShowChartOutlinedIcon />,
    path: "/line",
  },
  {
    name: "Geography Chart",
    icon: <MapOutlinedIcon />,
    path: "/geography",
  },
];
const Sidebar = ({ open, handleDrawerClose }: ISidebar) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const colorMode = useColorMode();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Avatar
        sx={{
          mx: "auto",
          width: open ? 80 : 40,
          height: open ? 80 : 40,
          my: 1,
          border: "1px solid gray",
          transition: "0.25s",
        }}
        alt="admin avatar"
        src={adminAvatar}
      />
      <Typography
        variant="body1"
        align="center"
        sx={{ fontSize: open ? 17 : 0, transition: "0.25s" }}
      >
        Badr Mohamed
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ fontSize: open ? 15 : 0, transition: "0.25s" }}
        mb={open ? 2 : 0}
        color={theme.palette.info.main}
      >
        Admin
      </Typography>
      <Divider />
      <List>
        {array1.map(({ name, icon, path }) => (
          <ListItem key={name} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => navigate(path)}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  bgcolor:
                    path === pathname
                      ? colorMode?.mode === "light"
                        ? grey[300]
                        : grey[800]
                      : null,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <Tooltip title={name} placement="left">
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {icon}
                </ListItemIcon>
              </Tooltip>
              <ListItemText
                primary={name}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {array2.map(({ name, icon, path }) => (
          <ListItem key={name} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => navigate(path)}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  bgcolor:
                    path === pathname
                      ? colorMode?.mode === "light"
                        ? grey[300]
                        : grey[800]
                      : null,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <Tooltip title={name} placement="left">
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {icon}
                </ListItemIcon>
              </Tooltip>
              <ListItemText
                primary={name}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {array3.map(({ name, icon, path }) => (
          <ListItem key={name} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => navigate(path)}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  bgcolor:
                    path === pathname
                      ? colorMode?.mode === "light"
                        ? grey[300]
                        : grey[800]
                      : null,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <Tooltip title={name} placement="left">
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {icon}
                </ListItemIcon>
              </Tooltip>
              <ListItemText
                primary={name}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
