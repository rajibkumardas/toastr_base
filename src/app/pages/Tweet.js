/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {blue300} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Twit from "./components/twit";

const styles = {
  container: {
    textAlign: 'center',
/*     paddingTop: 200, */
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: blue300,
  },
});

class Tweet extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <h1>Twitter</h1>
      		<p />
					<div>
					<p>Time to make a Twit!</p>
          <Twit/>
					</div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Tweet;