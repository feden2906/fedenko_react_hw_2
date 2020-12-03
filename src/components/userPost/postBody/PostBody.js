import React, {Component} from 'react';
import './PostBody.css'

class PostBody extends Component {
  render() {
    const {body} = this.props
    return (
        <h4>{body}</h4>
    );
  }
}

export default PostBody;