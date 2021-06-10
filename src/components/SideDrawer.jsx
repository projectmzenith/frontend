import React from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import AssignmentLateOutlinedIcon from "@material-ui/icons/AssignmentLateOutlined";

const drawerWidth = "20%";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#00589c"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

const SideDrawer = () => {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const renderDrawerIcon = index => {
    switch (index) {
      case 0:
        return <AssignmentLateOutlinedIcon />;
      case 1:
        return <EventAvailableOutlinedIcon />;
      case 2:
        return <AccountCircleOutlinedIcon />;
      case 3:
        return <ListAltRoundedIcon />;
      case 4:
        return <SettingsOutlinedIcon />;
      default:
        return;
    }
  };

  const getTabNavigation = index => {
    switch (index) {
      case 0:
        history.push("/Announcements");
        break;
      case 1:
        history.push("/Events");
        break;
      case 2:
      case 3:
      case 4:
      default:
    }
  };

  return (
    <div>
      <CssBaseline />
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={true}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <Divider />
        <List>
          {[
            "Announcements",
            "Events",
            "Members/Pledges",
            "Requirements",
            "Settings"
          ].map((text, index) => (
            <ListItem
              style={{ color: "white" }}
              button
              key={text}
              onClick={() => getTabNavigation(index)}
            >
              {
                <ListItemIcon style={{ color: "white" }}>
                  {renderDrawerIcon(index)}
                </ListItemIcon>
              }
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default SideDrawer;
