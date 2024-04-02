import ResponsePlugin from "./abstractResponsePlugin";

class DefaultPlugin extends ResponsePlugin {
    getText(): string {
        return 'This is the default plugin';
    }
}

export default DefaultPlugin;