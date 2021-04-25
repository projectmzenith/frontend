import React, { useState } from "react";
import { connect } from "react-redux";

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
import { blue } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Popover from "@material-ui/core/Popover";

const Announcement = ({ announcement }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const date = new Date(announcement.createdAt);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const openPopover = event => {
    setAnchorEl(event.currentTarget);
  };

  const closePopover = event => {
    setAnchorEl(null);
  };

  return (
    <Card className={classes.root}>
      <Popover
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        onClose={closePopover}
      >
        <Typography color="textSecondary">Edit</Typography>
        <Typography color="textSecondary">Delete</Typography>
      </Popover>
      <CardHeader
        avatar={<Avatar aria-label="recipe" className={classes.avatar} />}
        action={
          <IconButton onClick={openPopover}>
            <MoreVertIcon />
          </IconButton>
        }
        title={announcement.header}
        subheader={
          date.toLocaleString("default", { month: "long" }) +
          ", " +
          date.getDate() +
          " " +
          date.getUTCFullYear()
        }
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {announcement.body}
        </Typography>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Collapse>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
  //const [email, setEmail]=useState('');

  //return (
};

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 600,
    width: "90vh"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: blue[500]
  }
}));

const mapStateToProps = state => {
  return {
    Auth: state.Auth
  };
};

export default connect(mapStateToProps)(Announcement);
