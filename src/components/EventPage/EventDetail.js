import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import rupaul from "../../resources/rupaul.jpg";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

const useStyles = makeStyles({
  root: {
    maxWidth: 700
  },
  media: {
    height: 230
  },
  signUp: {
    justifyContent: "flex-end"
  }
});

const EventDetail = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} src={rupaul} component="img" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Plant a Pot with Members!
        </Typography>
        <Typography gutterBottom variant="h6" component="h5">
          Details:
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus
          scelerisque tristique diam a lorem amet accumsan accumsan
          pellentesque. Iaculis cras amet suspendisse pellentesque in.
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <EventAvailableOutlinedIcon style={{ color: "black" }} />;
            </ListItemIcon>
            <ListItemText primary={"May 18th 2021"} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AccessTimeIcon style={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText primary={"11:00 AM"} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RoomOutlinedIcon style={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText
              primary={"Back of StonesTown Mall"}
              secondary={"123 Sesame Street 94112"}
            />
          </ListItem>
        </List>
      </CardContent>
      <CardActions className={classes.signUp}>
        <Button
          className={classes.signUp}
          variant="contained"
          size="small"
          color="primary"
          style={{ padding: "10px" }}
        >
          Sign Up
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventDetail;
