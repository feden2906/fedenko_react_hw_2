import React, {Component} from 'react';

class PostBody extends Component {
  render() {
    const {body} = this.props
    return (
        <h4>{body}</h4>
    );
  }
}

export default PostBody;