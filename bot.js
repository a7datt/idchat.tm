// بوت تيليجرام بسيط - يعطي المستخدم الـ Chat ID الخاص فيه
const { Telegraf } = require('telegraf');

// ضع التوكن الخاص بالبوت هنا (تحصل عليه من @BotFather)
const BOT_TOKEN = 'ضع_التوكن_هنا';

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  const chatId = ctx.chat.id;

  ctx.reply(
    `هذا الايدي الخاص بك: \`${chatId}\`\n\nشكراً لاختيارك سيرابت SYRABIT\nموقعنا الالكتروني: www.syrabit.sy`,
    { parse_mode: 'Markdown' }
  );
});

// أمر إضافي لو حاب يطلب الآيدي بأي وقت
bot.command('id', (ctx) => {
  ctx.reply(
    `هذا الايدي الخاص بك: \`${ctx.chat.id}\`\n\nشكراً لاختيارك سيرابت SYRABIT\nموقعنا الالكتروني: www.syrabit.sy`,
    { parse_mode: 'Markdown' }
  );
});

bot.launch();
console.log('✅ البوت شغال...');

// إيقاف نظيف عند إغلاق العملية
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
