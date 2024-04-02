import PluginManager from "./pluginManager";
import ResponsePlugin from "./plugins/abstractResponsePlugin";

export interface SelectedPluginInterface {
  pluginName: string;
}

class PluginInterface {
  private pluginManager: PluginManager;

  constructor(pluginManager: PluginManager) {
    this.pluginManager = pluginManager;

    //registering default plugin
    this.pluginManager.registerPlugin({
      name: "default",
      packagename: "./plugins/default",
    });
  }

  getResponse(pluginName: string) {
    const plugin = this.pluginManager.loadPlugin<ResponsePlugin>(pluginName);
    return plugin.getText();
  }
}
