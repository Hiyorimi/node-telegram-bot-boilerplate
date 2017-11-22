const Telegraf = require('telegraf')

let bot = new Telegraf(process.env.BOT_TOKEN)
bot.use(Telegraf.log())

const basic_commands = require('./basic_commands').addListeners
const example = require('./example').addListeners
const keyboard_commands = require('./keyboard').addListeners

basic_commands(bot)
example(bot)
keyboard_commands(bot)

module.exports = bot