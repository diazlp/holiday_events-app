const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "diaz",
        mongodb_password: "xqXzdpdpXbbJMAzE",
        mongodb_clustername: "holiday-events",
        mongodb_database: "events-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "diaz",
      mongodb_password: "xqXzdpdpXbbJMAzE",
      mongodb_clustername: "holiday-events",
      mongodb_database: "events",
    },
  };
};
