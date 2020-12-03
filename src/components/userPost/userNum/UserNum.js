import React, {Component} from 'react';

class UserNum extends Component {
  render() {
    const {userId} = this.props
    return (
        <div>
          {<h2>Пост куристувача №{userId}</h2>}
        </div>
    );
  }
}

export default UserNum;