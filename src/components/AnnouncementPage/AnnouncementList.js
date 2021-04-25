import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Box, Paper } from "@material-ui/core";
import Announcement from "./Announcement";
import Grid from "@material-ui/core/Grid";
import construction from "../../resources/construction.jpg";
import "./AnnouncementPage.css";
import { fetchAnnouncments } from "../../actions";
import SideDrawer from "../SideDrawer";
import CircularProgress from "@material-ui/core/CircularProgress";

const AnnouncementList = ({ Announcments }) => {
  if (Announcments[0].id) {
    return Announcments.map(announcment => {
      return (
        <div>
          <hr className="hr" />
          <Announcement announcement={announcment} />
        </div>
      );
    });
  } else {
    return <CircularProgress size={100} />;
  }
};

// const mapStateToProps = state => {
//   console.log(state.Announcements)
//   return {
//     Announcements: state.Announcements
//   };
// };

export default AnnouncementList;

// export default connect(
//   mapStateToProps,
//   null
// )(AnnouncementList);
