import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Box, Paper } from "@material-ui/core";
import AnnouncementList from "./AnnouncementList";
import Grid from "@material-ui/core/Grid";
import construction from "../../resources/construction.jpg";
import "./AnnouncementPage.css";
import { fetchAnnouncments } from "../../actions";
import SideDrawer from "../SideDrawer";

const AnnouncementPage = ({ fetchAnnouncments, Announcements }) => {
  useEffect(() => {
    // Update the document title using the browser API
    fetchAnnouncments();
  }, []);

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <SideDrawer />
        </Grid>
        <Grid item container xs={5}>
          <Grid item>
            <AnnouncementList Announcments={Announcements} />
          </Grid>
        </Grid>
        <Grid container item xs={4}>
          <Grid item style={{ height: "95vh" }}>
            <img src={construction} className="img" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
//          <img src={construction} className="img" />
const mapStateToProps = state => {
  console.log(state.Announcements.AnnouncementList);
  return {
    Announcements: state.Announcements.AnnouncementList
  };
};

export default connect(
  mapStateToProps,
  { fetchAnnouncments }
)(AnnouncementPage);
