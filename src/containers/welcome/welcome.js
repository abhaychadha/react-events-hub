import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../../components/header";
import Search from "../search";
import Info from "../info";
import { connect } from "react-redux";

class Welcome extends Component {
  componentDidMount() {
    const { localStorage } = window;
    if (!localStorage.getItem("artists")) {
      localStorage.setItem("artists", JSON.stringify([]));
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <Header classes={classes} heading="Events Hub" />
        <main>
          {/* Hero unit */}
          <Search />
          <div className={classNames(classes.layout, classes.cardGrid)}>
            {/* End hero unit */}
            <Info className={!this.props.name.length ? classes.hidden : ""} />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

Welcome.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    name: state.Artist.name,
    artist: state.Artist
  };
};
const mapDispatchToProps = (dispatch, ownProps) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
