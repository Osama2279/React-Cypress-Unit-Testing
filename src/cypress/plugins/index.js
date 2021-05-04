const { renameSync } = require('fs');

module.exports = (on, config) => {
  require("@cypress/react/plugins/react-scripts")(on, config);

  // Below Snipet will only overwrite previous screenshot
  on("after:screenshot", ({ path }) => {
    renameSync(path, path.replace(/ \(\d*\)/i, ""));
  });

  return config;
};
