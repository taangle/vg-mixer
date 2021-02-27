'use strict';

import { newGame } from "../logic/generator.js";

const e = React.createElement;

class Mixer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        text: ""
    };
  }

  render() {
    const text = e(GeneratedText, {key: 'text', text: this.state.text});
    const button = e(GeneratorButton, {key: 'button', onClick: () => this.setState({text: newGame()})})
    return e(
        'div',
        null,
        [button, text]
    );
  }
}

class GeneratedText extends React.Component {
    render() {
        return e('div', null, this.props.text);
    }
}

class GeneratorButton extends React.Component {
    render() {
        return e(
            'button',
            { onClick: this.props.onClick },
            'New game!'
        );
    }
}

// TODO allow user to lock a game/feature combo while rerolling the other one
// TODO allow user to chain more than two game/feature combos

const domContainer = document.querySelector('#react-wrapper');
ReactDOM.render(e(Mixer), domContainer);
