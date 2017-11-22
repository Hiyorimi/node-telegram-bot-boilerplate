require('dotenv').load();
module.exports = {
  bot_token: process.env.BOT_TOKEN,
  database: process.env.MONGO_DB_URL,
  production_url: process.env.ARBEIT_BOT_PRODUCTION_URL,
  should_use_webhooks: process.env.USE_WEBHOOKS || false,
  webhook_callback_url: process.env.WEBHOOK_CALLBACK_URL,
  ssl_certificate_path: process.env.SSL_CERTIFICATE_PATH,
  ssl_key_path: process.env.SSL_KEY_PATH,
  ssh_rsa_path: process.env.SSH_RSA_PATH,
  adminChatId: process.env.ADMIN_CHAT_ID,
};
