
module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'someAdminSecret'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'someApiSalt'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'someTransferSalt'),
    },
  },
});
