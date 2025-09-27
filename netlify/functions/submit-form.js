const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const data = JSON.parse(event.body);

        // Валидация (минимальная)
        if (!data.name || !data.phone || !data.buildingType) {
            return { statusCode: 400, body: 'Missing required fields' };
        }

        const cleanPhone = '+7' + data.phone.replace(/\D/g, '').slice(-10);
        const message = `
🆕 НОВАЯ ЗАЯВКА С САЙТА

📋 Тип: ${data.buildingType}
👤 Имя: ${data.name}
🏢 Компания: ${data.company || 'Не указана'}
📞 Телефон: ${cleanPhone}
📧 Email: ${data.email || 'Не указан'}
📐 Площадь: ${data.area || 'Не указана'} м²

💬 Сообщение: ${data.message || 'Нет дополнительной информации'}
    `.trim();

        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
            }),
        });

        if (response.ok) {
            return { statusCode: 200, body: JSON.stringify({ success: true }) };
        } else {
            return { statusCode: 500, body: 'Telegram error' };
        }
    } catch (error) {
        console.error('Function error:', error);
        return { statusCode: 500, body: 'Internal Server Error' };
    }
};