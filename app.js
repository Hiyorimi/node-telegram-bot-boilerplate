/** Configure a bot */
const config = require('./config')

const bot = require('./controllers/main')

bot.start((ctx) => {
  console.log('started:', ctx.from.id)
  return ctx.reply('Welcome!')
})


bot.startPolling()
