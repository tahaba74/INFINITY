import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Footer from './components/Footer/Footer'

const e = React.createElement;

class Swipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { swiped: false };
  }

  render() {
    if (this.state.swiped) {
      return 'swiped';
    }

    return e(
      'button',
      { onClick: () => this.setState({ swiped: true }) },
      'Like'
    );
  }
  
}
function GetProgrammeur() {
	let choice;
	let list = $("[name='button4']");
	for(let i=0; i<list.length; i++) {
		if (list[i].checked) {
   			choice = list[i].value;
			break;
		}
	}
    return choice;
}
