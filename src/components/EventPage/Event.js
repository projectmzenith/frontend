import React, { useState } from "react";
import { connect } from "react-redux";
import { Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { blue, green, red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Popover from "@material-ui/core/Popover";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import BeenhereOutlinedIcon from "@material-ui/icons/BeenhereOutlined";

import { useTheme } from "@material-ui/core/styles";

import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const Event = ({ Event }) => {
  const ev = {
    ID: 555,
    CreatedAt: "2021-04-29T04:47:05.068142Z",
    UpdatedAt: "2021-04-29T04:47:05.068142Z",
    DeletedAt: null,
    CreatorId: 333,
    EventTitle: null,
    EventDescription: "This is the event description",
    EventTime: null,
    EventLocation: null,
    EventType: "Service",
    ServiceType: null,
    ChairId: 69,
    CoChairId: 888,
    Host: "Ru Paul",
    Cap: null,
    Participants: null,
    AnnouncementId: null,
    Likes: 0
  };
  const classes = useStyles();
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [color, setColor] = React.useState({ backgroundColor: blue[500] });
  const open = Boolean(anchorEl);
  const date = new Date(ev.createdAt);

  const setAvatarColor = () => {};
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const openPopover = event => {
    setAnchorEl(event.currentTarget);
  };

  const closePopover = event => {
    setAnchorEl(null);
  };

  const renderInfo = () => {
    return (
      <List dense={true}>
        <ListItem>
          <EventAvailableOutlinedIcon style={{ color: "black" }} />
          <ListItemText primary={"May 18th 2021"} />
        </ListItem>
        <ListItem>
          <AccessTimeIcon style={{ color: "black" }} />

          <ListItemText primary={"11:00 AM"} />
        </ListItem>
        <ListItem>
          <RoomOutlinedIcon style={{ color: "black" }} />
          <ListItemText
            primary={"Back of StonesTown Mall"}
            secondary={"123 Sesame Street 94112"}
          />
        </ListItem>
      </List>
    );
  };

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.day}>
          <Typography>May 20</Typography>
          <EventAvailableOutlinedIcon />
        </CardContent>
      </div>
      <CardContent className={classes.content}>{renderInfo()}</CardContent>
    </Card>
  );
  //const [email, setEmail]=useState('');

  //return (
};

const useStyles = makeStyles(theme => ({
  root: {
    padding: 5,
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  day: {
    flex: "1 0 auto",
    backgroundColor: "rgb(228, 134, 134)",
    alignItems: "center",
    color: "white"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(Event);

// import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
//
// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex'
//   },
//   details: {
//     display: 'flex',
//     flexDirection: 'column'
//   },
//   content: {
//     flex: '1 0 auto'
//   },
//   cover: {
//     width: 151
//   },
//   controls: {
//     display: 'flex',
//     alignItems: 'center',
//     paddingLeft: theme.spacing(1),
//     paddingBottom: theme.spacing(1)
//   },
//   playIcon: {
//     height: 38,
//     width: 38
//   }
// }));
//
// export default function MediaControlCard() {
//   const classes = useStyles();
//   const theme = useTheme();
//
//   return (
//     <Card className={classes.root}>
//       <div className={classes.details}>
//         <CardContent className={classes.content}>
//           <Typography component="h5" variant="h5">
//             Live From Space
//           </Typography>
//           <Typography variant="subtitle1" color="textSecondary">
//             Mac Miller
//           </Typography>
//         </CardContent>
//         <div className={classes.controls}>
//           <IconButton aria-label="previous">
//             {theme.direction === 'rtl' ? (
//               <SkipNextIcon />
//             ) : (
//               <SkipPreviousIcon />
//             )}
//           </IconButton>
//           <IconButton aria-label="play/pause">
//             <PlayArrowIcon className={classes.playIcon} />
//           </IconButton>
//           <IconButton aria-label="next">
//             {theme.direction === 'rtl' ? (
//               <SkipPreviousIcon />
//             ) : (
//               <SkipNextIcon />
//             )}
//           </IconButton>
//         </div>
//       </div>
//       <Typography variant="subtitle1" color="textSecondary">
//         Mac Miller
//       </Typography>
//     </Card>
//   );
