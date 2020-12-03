import React, {Component} from 'react';

class UserNum extends Component {
  render() {
    const {userId} = this.props
    return (
        <div>
          {<h2><i>Пост куристувача №{userId}</i></h2>}
        </div>
    );
  }
}

export default UserNum;