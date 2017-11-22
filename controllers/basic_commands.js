
const addListeners = (bot) => {
    bot.command('help', (ctx) => ctx.reply('Try send a sticker!'))
    bot.hears('hi', (ctx) => ctx.reply('Hey there!'))
    bot.hears(/buy/i, (ctx) => ctx.reply('Buy-buy!'))
    bot.on('sticker', (ctx) => ctx.reply('👍'))
}

module.exports = {
    addListeners
}