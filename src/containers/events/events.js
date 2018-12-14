import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import classNames from "classnames";
import { getDateString } from "../../utils/utility";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

class Events extends Component {
  render() {
    const { classes } = this.props;
    return this.props.events.map((event, index) => {
      const date = new Date(event.datetime);
      return (
        <ExpansionPanel
          key={index}
          defaultExpanded={index === 0 ? true : false}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            classes={classNames(classes.spaceBetween)}
          >
            <Typography
              variant="h5"
              component="h2"
              align="left"
              className={classes.heading}
            >
              {`${event.venue.city}, ${event.venue.country}`}
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              align="right"
              className={classes.secondaryHeading}
            >
              {getDateString(date)}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography
              variant="h5"
              className={classes.secondaryHeading}
              gutterBottom
            >
              {" " + event.venue.name}, {event.venue.city}, {event.venue.city},{" "}
              {event.venue.country}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
    });
  }
}
const mapStateToProps = state => {
  return {
    events: state.Events.records
  };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  getArtist: params => dispatch(actions.getArtist(params))
});
export default connect(mapStateToProps, mapDispatchToProps)(Events);
