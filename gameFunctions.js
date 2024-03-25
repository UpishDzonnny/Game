const fs = require('fs');

// Funkcja wyświetlająca ekran gry
function gameScreen(chatId) {
    const gameImage = 'C:\Users\kplaz\OneDrive\Pulpit\rede game\e.jpg'; // Tutaj podaj ścieżkę do pliku z grafiką gry
    const gameText = 'Kliknij w grafikę, aby zdobyć punkty!'; // Tekst pod grafiką

    // Wysłanie grafiki wraz z interaktywnym klawiszem
    bot.sendPhoto(chatId, gameImage, {
        caption: gameText,
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Kliknij tutaj', callback_data: 'kliknięcie' }]
            ]
        }
    });
}

// Eksportowanie funkcji
module.exports = { gameScreen };