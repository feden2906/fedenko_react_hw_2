import React, {Component} from 'react';
import './App.css'
import RenderAllPosts from "../renderAllPosts/RenderAllPosts";


class App extends Component {


  render() {
    return (
        <div className='wrapper'>
          <RenderAllPosts/>
        </div>
    );
  }
}

export default App;