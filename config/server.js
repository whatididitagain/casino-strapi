module.exports = ({ env }) => ({
  app: {
    keys: env.array('APP_KEYS', ['qwerty123secretA', 'zxcvb456secretB']),
  },
});
