var dlx = {};

// if environment is Node, export as module
if (typeof module !== 'undefined' && module.exports && process) {
  module.exports = dlx;
}
