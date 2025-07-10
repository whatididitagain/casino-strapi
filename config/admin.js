module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'someVerySecretKey'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'someRandomSalt'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'someTransferSalt'),
    },
  },
});