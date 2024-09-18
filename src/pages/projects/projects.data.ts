export type TProject = {
  name: string;
  link: string;
  description: string;
  image: string;
  stack: string;
};

export const projects: TProject[] = [
  {
    name: 'Telegram Bot',
    link: 'https://t.me/adhavenBot',
    description: 'Bot for connecting advertisers and influencers',
    image: '../../assets/projects/telegram-bot.jpg',
    stack: 'Python, python-telegram-bot, MongoDB, Yandex Cloud',
  },
];
