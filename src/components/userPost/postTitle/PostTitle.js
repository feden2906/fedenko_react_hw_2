import React, {Component} from 'react';
import './PostTitle.css'
import PostBody from "../postBody/PostBody";

class PostTitle extends Component {

  state = {
    clickBtn: null,
    changeNameBtn: 'Показати'
  }
  flag = false

  showBody = () => {
    if (this.flag){
      this.setState({clickBtn: null})
      this.setState({changeNameBtn: 'Показати'})
    }else {
      this.setState({clickBtn: 'show'})
      this.setState({changeNameBtn: 'Згорнути'})
    }
    this.flag = !this.flag;
  }

  render() {
    let {clickBtn, changeNameBtn} = this.state
    const {title, body} = this.props

    return (
        <div>
          <div className='post-title'>
            <h3 className='inline-title'><b>{title}</b></h3>
            <button className='btn-title' onClick={this.showBody}><b>{changeNameBtn}</b></button>
          </div>

          {clickBtn && <PostBody body={body}/>}
        </div>
    );
  }
}

export default PostTitle;