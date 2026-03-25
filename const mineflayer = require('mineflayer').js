const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'ultimatesuvival10.aternos.me', // ex: play.meuservidor.com
    port: 55661,
    username: 'herobrine'
  })

  bot.on('spawn', () => {
    console.log('Bot entrou no servidor!')

    // Anti-AFK simples
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 500)
    }, 30000)
  })

  bot.on('end', () => {
    console.log('Bot caiu! Reconectando...')
    setTimeout(createBot, 5000)
  })

  bot.on('error', (err) => {
    console.log('Erro:', err)
  })
}

createBot()
