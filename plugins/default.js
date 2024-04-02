"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractResponsePlugin_1 = __importDefault(require("./abstractResponsePlugin"));
class DefaultPlugin extends abstractResponsePlugin_1.default {
    getText() {
        return 'This is the default plugin';
    }
}
exports.default = DefaultPlugin;
