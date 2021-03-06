import * as React from 'react';
import { withRouter } from 'react-router-dom';
import './app.css';

class Reset extends React.PureComponent<{ history: any }> {
  public handleClick() {
    window.localStorage.clear();
    window.location.href = window.location.pathname;
  }

  public render() {
    return (
      <div className="reset">
        <p>
          Reset the Vega Editor by clearing the local storage. You can run this if the editor is struck in a loop or
          otherwise not functioning correctly. This operation cannot be undone.
        </p>
        <button onClick={this.handleClick.bind(this)} type="button">
          Reset Vega Editor
        </button>
      </div>
    );
  }
}

export default withRouter(Reset);
