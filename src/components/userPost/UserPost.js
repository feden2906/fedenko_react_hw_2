import React, {Component} from 'react';
import UserNum from "./userNum/UserNum";
import PostTitle from "./postTitle/PostTitle";
import PostBody from "./postBody/PostBody";

class UserPost extends Component {
  render() {
    const {post: {userId, id, title, body}} = this.props;
    return (
        <div>
          {userId && <UserNum userId={userId} key={id}/>}
          <div>
            {title && <PostTitle title={title} key={id}/>}
          </div>
          {body && <PostBody body={body} key={id}/>}
        </div>
    );
  }
}

export default UserPost;