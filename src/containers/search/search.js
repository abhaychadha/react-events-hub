import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Autocomplete from "../../components/autocomplete";
import artists from "../../static/artists";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchEnabled: false,
      searchText: ""
    };
  }
  getArtistInfo(event) {
    this.props.getArtist(this.state.searchText);
  }
  handleChange(object) {
    this.setState({
      searchEnabled: true,
      searchText: object.value
    });
  }
  clearAll(event) {
    this.setState({
      searchText: ""
    });
    this.props.clearAll();
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.heroUnit}>
        <div className={classes.heroContent}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Search For Artists
          </Typography>
          <Autocomplete
            list={artists}
            handleChange={this.handleChange.bind(this)}
          />
          <div className={classes.heroButtons}>
            <Grid container spacing={16} justify="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={!this.state.searchEnabled}
                  onClick={this.getArtistInfo.bind(this)}
                >
                  Search
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={this.clearAll.bind(this)}
                >
                  Clear
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  getArtist: params => dispatch(actions.getArtist(params)),
  clearAll: () => dispatch(actions.clearAll())
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);
