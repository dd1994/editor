import stringify from 'json-stringify-pretty-compact';
import * as React from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { bindActionCreators, Dispatch } from 'redux';
import * as EditorActions from '../../../actions/editor';
import { Mode, SIDEPANE } from '../../../constants';
import ConfigEditorHeader from '../../config-editor/config-editor-header';

const toggleStyle = {
  cursor: 'pointer',
};

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & { history: any };

class CompiledSpecDisplayHeader extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
    this.editVegaSpec = this.editVegaSpec.bind(this);
  }
  public editVegaSpec() {
    if (this.props.history.location.pathname.indexOf('/edited') === -1) {
      this.props.history.push('/edited');
    }
    this.props.updateVegaSpec(stringify(this.props.value));
  }
  public render() {
    if (this.props.compiledVegaSpec) {
      const toggleStyleUp = Object.assign({}, toggleStyle, {
        position: 'static',
      });
      return (
        <div className="editor-header pane-header" onClick={e => this.props.toggleCompiledVegaSpec()}>
          <ul className="tabs-nav">
            {this.props.mode === Mode.VegaLite ? (
              <li
                className={this.props.sidePaneItem === SIDEPANE.CompiledVega ? 'active-tab' : undefined}
                onClick={e => {
                  if (this.props.sidePaneItem === SIDEPANE.CompiledVega) {
                    e.stopPropagation();
                  }
                  e.stopPropagation();
                  this.props.setSidePaneItem(SIDEPANE.CompiledVega);
                }}
              >
                Compiled Vega
              </li>
            ) : null}
            <li
              className={this.props.sidePaneItem === SIDEPANE.Config ? 'active-tab' : undefined}
              onClick={e => {
                if (this.props.sidePaneItem === SIDEPANE.Config) {
                  e.stopPropagation();
                }
                e.stopPropagation();
                this.props.setSidePaneItem(SIDEPANE.Config);
              }}
            >
              Config
            </li>
          </ul>

          {this.props.sidePaneItem === SIDEPANE.CompiledVega && this.props.mode === Mode.VegaLite ? (
            <button className="edit-vega" onClick={this.editVegaSpec} style={{ zIndex: 0, cursor: 'pointer' }}>
              Edit Vega Spec
            </button>
          ) : (
            <>
              <ConfigEditorHeader />
            </>
          )}

          <ChevronDown />
        </div>
      );
    } else {
      return (
        <div onClick={this.props.toggleCompiledVegaSpec} className="editor-header" style={toggleStyle}>
          <span>{this.props.mode === Mode.VegaLite ? 'Compiled Vega and' : null} Config</span>

          <button onClick={this.editVegaSpec} style={{ zIndex: -1, opacity: 0, cursor: 'pointer' }}>
            Edit Vega Spec
          </button>

          <ChevronUp />
        </div>
      );
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    compiledVegaSpec: state.compiledVegaSpec,
    mode: state.mode,
    sidePaneItem: state.sidePaneItem,
    value: state.vegaSpec,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<EditorActions.Action>) {
  return bindActionCreators(
    {
      setSidePaneItem: EditorActions.setSidePaneItem,
      toggleCompiledVegaSpec: EditorActions.toggleCompiledVegaSpec,
      updateVegaSpec: EditorActions.updateVegaSpec,
    },
    dispatch
  );
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CompiledSpecDisplayHeader)
);
