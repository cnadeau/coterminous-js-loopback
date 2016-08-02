import * as enableLoging from './src/enableLogging.js';
import logger from './src/log.js';
import loopback from './src/loopback.js';
var log = logger("main.js");
log.debug("test");
window.l = new loopback();
