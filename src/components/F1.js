

// function F1(props){
//     // constructor(props){
//     //     super(props);
//     //     this.state = {bool: true};
//     // }
//     console.log(props);
//     // const boxcolor = {

//     // }
//     return(
        // <div id="grad">
        //     <h1 class="heading">Color Picker</h1>
        //     <div class="colorBox">

        //     </div>
        // </div>
//     )
// }

// export default F1;

import React, { Component } from 'react';
import './style.css'

class F1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selectedColor: "#90EE90",
    };
  }

  toggleColorList = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  handleColorSelect = (color) => {
    this.setState({
      selectedColor: color,
      isOpen: false,
    });
  };

  render() {
    const { colors } = this.props;
    const { isOpen, selectedColor } = this.state;

    return (
        <div id="grad">
            <h1 class="heading">Color Picker</h1>
            <div class="colorBox" style={{backgroundColor: selectedColor}}>
                {isOpen && (
                <div className="color-list">
                    {colors.map((color, index) => (
                    <button
                        key={index}
                        className="color-option"
                        style={{ backgroundColor: color }}
                        onClick={() => this.handleColorSelect(color)}
                    ></button>
                    ))}
                </div>
                )}
            </div>
            <button style={{background:"black"}} className="pickColor btn btn-dark" onClick={this.toggleColorList}>Pick a color</button>
        </div>
    );
  }
}

export default F1;
