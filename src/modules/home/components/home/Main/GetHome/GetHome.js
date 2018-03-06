import React from "react";

class Get extends React.Component {
  render() {
    const { gets } = this.props;

    return (
      <div>
        Get post <p>{gets.map(post => post.id)}</p>
      </div>
    );
  }
}

export default Get;
