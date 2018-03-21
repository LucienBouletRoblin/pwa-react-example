import React from "react";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";

class Get extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
  }

  handleClick = () => {
    this.setState({
      num: this.state.num < 99 ? this.state.num + 1 : 0
    });
  };

  render() {
    const { gets } = this.props;
    const { num } = this.state;

    return (
      <Grid container justify="space-between">
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} sm={9}>
              <Typography variant="title">Getting posts:</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Button
                color="primary"
                variant="raised"
                onClick={this.handleClick}
              >
                Get another one
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Id: {gets.length >= 1 ? gets[num].id : ""}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Title: {gets.length >= 1 ? gets[num].title : ""}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Post: {gets.length >= 1 ? gets[num].body : ""}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Get;
