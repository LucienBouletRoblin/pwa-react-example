import React from "react";
import Button from "material-ui/Button";

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
      <div>
        {createdPost ? (
          <span>
            Posted! Retry => <Button onClick={this.handleReset}>Click</Button>
          </span>
        ) : (
          <span>
            Create Post <Button onClick={this.handleClick}>Click</Button>
          </span>
        )}
      </div>
    );
  }
}

export default CreateHome;
