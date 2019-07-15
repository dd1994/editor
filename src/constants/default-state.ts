import { Spec } from 'vega';
import { TopLevelSpec as VlSpec } from 'vega-lite';
import { Config } from 'vega-themes/build/config';
import { LocalLogger } from '../utils/logger';
import { LAYOUT, Mode, NAVBAR, Renderer, SIDEPANE, VEGA_LITE_START_SPEC, View } from './consts';

export interface State {
  isAuthenticated: boolean;
  baseURL: string;
  compiledVegaSpec: boolean;
  compiledVegaPaneSize: number;
  config: Config;
  configEditorString: string;
  debugPane: boolean;
  debugPaneSize: number;
  editorRef: any;
  editorString: string;
  error: Error;
  export: boolean;
  gist: string;
  lastPosition: number;
  logs: boolean;
  manualParse: boolean;
  mode: Mode;
  navItem: string;
  sidePaneItem: string;
  parse: boolean;
  profileUrl: string;
  renderer: Renderer;
  selectedExample: string;
  vegaLiteSpec: VlSpec;
  vegaSpec: Spec;
  view: View;
  warningsCount: number;
  warningsLogger: LocalLogger;
  themeName: string;
}

export const DEFAULT_STATE: State = {
  baseURL: null,
  compiledVegaPaneSize: LAYOUT.MinPaneSize,
  compiledVegaSpec: false,
  config: {},
  configEditorString: '{}',
  debugPane: false,
  debugPaneSize: LAYOUT.MinPaneSize,
  editorRef: null,
  editorString: VEGA_LITE_START_SPEC,
  error: null,
  export: false,
  gist: null,
  isAuthenticated: false,
  lastPosition: 0,
  logs: false,
  manualParse: false,
  mode: Mode.VegaLite,
  navItem: NAVBAR.Logs,
  parse: false,
  profileUrl: '',
  renderer: 'canvas',
  selectedExample: null,
  sidePaneItem: SIDEPANE.CompiledVega,
  themeName: 'custom',
  vegaLiteSpec: null,
  vegaSpec: {},
  view: null,
  warningsCount: 0,
  warningsLogger: new LocalLogger(),
};
