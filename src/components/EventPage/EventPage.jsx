import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Box, Paper } from "@material-ui/core";
//import EventList from "./AnnouncementList";
import Grid from "@material-ui/core/Grid";
import construction from "../../resources/construction.jpg";
//import "./AnnouncementPage.css";
import { fetchAnnouncments } from "../../actions";
import SideDrawer from "../SideDrawer";
import Event from "./Event";
import EventDetail from "./EventDetail";

//TODO Events TODO Events TODO Events TODO Events TODO Events
const EventPage = ({ fetchAnnouncments }) => {
  useEffect(() => {
    // Update the document title using the browser API
    fetchAnnouncments();
  }, []);
  return (
    <div>
      <Grid container spacing={0.5}>
        <Grid item xs={3}>
          <SideDrawer />
        </Grid>
        <Grid item container xs={9} spacing={2} style={{ marginTop: "10px" }}>
          <Grid item xs={4}>
            <Paper elevation={4}>
              <Event />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <EventDetail />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
//          <img src={construction} className="img" />
const mapStateToProps = state => {
  return {
    Events: state.Events.EventList
  };
};

export default connect(
  mapStateToProps,
  { fetchAnnouncments }
)(EventPage);
