const TelegramBot = require('node-telegram-bot-api');

// Token API Twojego bota Telegrama
const token = '7183424719:AAHdhYH0YUbTzDhfbv_LKDkKWWmUqWMfBcc';

// Inicjalizacja bota Telegrama
const bot = new TelegramBot(token, { polling: true });

// Obsługa komendy "/startgame"
bot.onText(/\/startgame/, (msg) => {
  // ID czatu, do którego została wysłana komenda
  const chatId = msg.chat.id;

  // Link do gry clicker
  const gameLink = 'C:/Users/kplaz/OneDrive/Pulpit/rede%20game/interfejs.html'; // Zastąp to linkiem do swojej gry

  // Wysłanie wiadomości z linkiem do gry
  bot.sendMessage(chatId, 'Witaj! Kliknij poniższy link, aby zagrać w grę clicker:\n' + gameLink);
});