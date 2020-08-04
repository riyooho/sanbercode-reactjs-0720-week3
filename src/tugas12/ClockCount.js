import React, {Component} from 'react'

class ClockCount extends Component{

  constructor(props){
    super(props)
    this.state = {
      date: new Date(),
      count: this.props.startCount
    };
  }

  componentDidMount(){
    if(this.props.start !== undefined) {
      this.setState({time: this.props.start()})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
      count: this.state.count - 1 
    });
  }

  render() {
    return(
      <>
        {this.state.count >= 1 &&
        <table style = {{width: "100%", fontWeight: "bold", fontSize: "32px"}}>
        <tr>
        <td align = "left">sekarang jam: {this.state.date.toLocaleTimeString()}</td>
        <td align = "right">{this.state.count}</td>
        </tr> 
        </table>
      }
      </>
    )
  }
}

export default ClockCount