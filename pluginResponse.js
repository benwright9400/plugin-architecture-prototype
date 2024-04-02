"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PluginInterface {
    constructor(pluginManager) {
        this.pluginManager = pluginManager;
        //registering default plugin
        this.pluginManager.registerPlugin({
            name: "default",
            packagename: "./plugins/default",
        });
    }
    getResponse(pluginName) {
        const plugin = this.pluginManager.loadPlugin(pluginName);
        return plugin.getText();
    }
}
