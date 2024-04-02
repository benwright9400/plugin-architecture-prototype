import ResponsePlugin from "./abstractResponsePlugin";

class DatePlugin extends ResponsePlugin {
    getText(): string {
        return 'This is the date plugin. The datetime is now ' + (new Date()).toISOString();
    }
}

export default DatePlugin;