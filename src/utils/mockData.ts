import userImage from '@assets/background-02.png';

export const user = {
  image: userImage,
  user: '@devbrunosantos',
  name: 'Bruno Santos',
  job: 'Software Developer',
  link: {
    title: 'Portfolio',
    url: 'https://devbruno.me/',
  },
  statistics: {
    followers: 1080,
    posts: 10,
  },
  posts: [
    {
      id: 0,
      user: {
        image: userImage,
        user: '@by_trama',
        name: 'Trama',
      },
      title: 'Do you wanna freela?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum a sapiente rerum obcaecati sint repudiandae reprehenderit quod assumenda voluptatem veniam odit necessitatibus debitis, error saepe! Accusamus aperiam rem iure? A.',
      date: '12 de outubro de 2023',
      engagements: {
        likes: 123,
        comments: 45,
        shares: 6,
      },
    },
    {
      id: 1,
      user: {
        image: userImage,
        user: '@devbrunosantos',
        name: 'Bruno Santos',
      },
      title: 'When things go wrong, how hard do you try?',
      description: `How much effort do you put into something that's correct but not perfect? I've always tried after countless failures in search of perfection. Is it wrong? Someday it's gonna work. Is that right? Bet it's not perfect! Am I satisfied with my tenth version of my portfolio? No, and I'm sure I'll make endless changes and even start over.`,
      date: '12 de outubro de 2023',
      engagements: {
        likes: 78,
        comments: 9,
        shares: 2,
      },
    },
    {
      id: 2,
      user: {
        image: userImage,
        user: '@by_trama',
        name: 'Trama',
      },
      title: 'Do you wanna freela?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum a sapiente rerum obcaecati sint repudiandae reprehenderit quod assumenda voluptatem veniam odit necessitatibus debitis, error saepe! Accusamus aperiam rem iure? A.',
      date: '12 de outubro de 2023',
      engagements: {
        likes: 217,
        comments: 49,
        shares: 22,
      },
    },
  ],
};

export const friends = [
  { image: userImage, onPress: null },
  { image: userImage, onPress: null },
  { image: userImage, onPress: null },
  { image: userImage, onPress: null },
  { image: userImage, onPress: null },
  { image: userImage, onPress: null },
];
