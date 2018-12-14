import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Grid from '@material-ui/core/Grid';
import Card from '../../components/card';
import Events from '../events';
import equal from 'fast-deep-equal'


class Info extends Component {
  constructor(props){
    super(props);
    this.state = {
        imageUrl: props.artist.thumb_url,
    }
  }
  componentDidUpdate(prevProps){
      if(!equal(this.props.artist, prevProps.artist)){
        this.props.getEvents(this.props.name);
      }
  }
  render() {
    // const {classes} = this.props;
    return <Grid container spacing={40} justify="center" className = {this.props.className}>
        <Grid item sm={12} md={12} lg={3}>
            <Card 
            imageUrl={this.props.thumb_url} 
            title={this.props.name} 
            body={"Tracker count: "+this.props.tracker_count} 
            social={this.props.facebook_page_url}
            link = {this.props.url}/> 
        </Grid>
        <Grid item sm={12} md={6} lg={9}>
            <Events />
        </Grid>    
    </Grid>  
  }
}

const mapStateToProps = state => {
  const {name, thumb_url, tracker_count, facebook_page_url, url} = state.Artist;
  return {
      artist: state.Artist,
      name: name,
      thumb_url: thumb_url, 
      tracker_count: tracker_count, 
      facebook_page_url: facebook_page_url,
      url: url
  };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  getEvents: params => dispatch(actions.getEvents(params))
});
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Info);
