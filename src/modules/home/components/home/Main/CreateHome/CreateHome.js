import React from "react";
import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";

class CreateHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createdPost: 0
    };
  }

  handleClick = () => {
    this.props.createHomePosts();
    this.setState({
      createdPost: this.state.createdPost + 1
    });
  };
  handleReset = () => {
    this.props.createHomePosts();
  };

  render() {
    const { postCreated } = this.props;
    const { createdPost } = this.state;
    return (
      <Grid container justify="space-between">
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} sm={10}>
              <Typography variant="title">Create a post:</Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
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
        <Grid item xs={12}>
          {postCreated ? (
            <span>Posted {createdPost} time!</span>
          ) : (
            <span>Could not post, offligne?</span>
          )}
        </Grid>
      </Grid>
    );
  }
}

export default CreateHome;
