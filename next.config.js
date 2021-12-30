const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "diaz",
        mongodb_password: "sdqUYEQPElQQu1Og",
        mongodb_clustername: "holiday0",
        mongodb_database: "events-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "diaz",
      mongodb_password: "sdqUYEQPElQQu1Og",
      mongodb_clustername: "holiday0",
      mongodb_database: "events",
    },
  };
};
