import React from 'react';
import './notation.scss';

class Notation extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notation: this.props.notation,
      name: this.props.name,
    }
  }
  render(){
    return (
      <div className="Notation">
        <p>{this.state.name}</p>
        <div className="Notation-Dot-List">
          {this.state.notation.map((item, i) => {
            if (item == 1) {
              return <div className="Notation-Dot-on"></div>
            }else {
              return <div className="Notation-Dot-off"></div>
            }
          })}
        </div>
      </div>
    );
  }
}

export default Notation;
