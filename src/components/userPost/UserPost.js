import React, {Component} from 'react';
import './UserPost.css'
import UserNum from "./userNum/UserNum";
import PostTitle from "./postTitle/PostTitle";


class UserPost extends Component {
  render() {
    const {post: {userId, id, title, body}} = this.props;
    return (
        <div className='post'>
          {userId && <UserNum userId={userId}/>}
          {title && <PostTitle title={title} body={body} key={id}/>}


        </div>
    );
  }
}

export default UserPost;