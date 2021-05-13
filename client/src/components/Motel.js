import React from 'react' ;


class Motel extends React.Component{
  constructor(props){
      super(props)
  }

  render(){
    return (
        <div>
        <h1>{this.props.room.price}</h1>
        <img src={this.props.room.img}></img>
        </div>
    )
  }
}

export default Motel ; 