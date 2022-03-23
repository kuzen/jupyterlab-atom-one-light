// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

 import {
    JupyterFrontEnd,
    JupyterFrontEndPlugin
  } from '@jupyterlab/application';
  import { IThemeManager } from '@jupyterlab/apputils';
  import { ITranslator } from '@jupyterlab/translation';
  
  /**
   * A plugin for the Jupyter Light Theme.
   */
  const plugin: JupyterFrontEndPlugin<void> = {
    id: '@kuzen/atom-one-light:plugin',
    requires: [IThemeManager, ITranslator],
    activate: (
      app: JupyterFrontEnd,
      manager: IThemeManager,
      translator: ITranslator
    ) => {
      const trans = translator.load('jupyterlab');
      const style = '@okuzen/atom-one-light/index.css';
      manager.register({
        name: 'Atom One Light',
        displayName: trans.__('Atom One Light'),
        isLight: true,
        themeScrollbars: true,
        load: () => manager.loadCSS(style),
        unload: () => Promise.resolve(undefined)
      });
    },
    autoStart: true
  };
  
  export default plugin;