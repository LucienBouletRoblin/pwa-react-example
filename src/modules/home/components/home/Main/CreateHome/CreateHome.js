import React from "react";
import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";

class CreateHome extends React.Component {
  handleClick = () => {
    this.props.createHomePosts();
  };
  handleReset = () => {
    this.props.createHomePosts();
  };

  render() {
    const { createdPost } = this.props;
    return (
      <Grid container="row" justify="space-between">
        <Grid item xs="12">
          <Grid container="row">
            <Grid item xs="12" sm="10">
              <Typography variant="title">Create a post:</Typography>
            </Grid>
            <Grid item xs="12" sm="2">
              <Button
                color="primary"
                variant="raised"
                onClick={this.handleClick}
              >
                Post!
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs="12">
          {createdPost ? (
            <span>
              Posted! Retry => <Button onClick={this.handleReset}>Click</Button>
            </span>
          ) : (
            <span>
              Create Post <Button onClick={this.handleClick}>Click</Button>
            </span>
          )}
        </Grid>
      </Grid>
    );
  }
}

export default CreateHome;
