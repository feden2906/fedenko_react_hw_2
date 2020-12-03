import React, {Component} from 'react';

class PostTitle extends Component {
  render() {
    const {title} = this.props
    return (

        <div className='post-title'>
          <h4 className='inline-title'>{title}</h4>
          <button>Click</button>
        </div>
    );
  }
}

export default PostTitle;