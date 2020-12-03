import React, {Component} from 'react';
import './RenderAllPosts.css'
import UserPost from "../userPost/UserPost";


class RenderAllPosts extends Component {

  state = {allPosts: []};

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(value => {
          this.setState({allPosts: value})
        })
  }

  render() {
    const {allPosts} = this.state;
    return (
        <div>
          {<h1>Всі пости користувачів</h1>}
          {allPosts.map(value => <UserPost post={value} key={value.id}/>)}
        </div>
    );
  }

}

export default RenderAllPosts;