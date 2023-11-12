export interface PublicationProps {
  id?: number;
  user: {
    image: ImageData;
    user: string;
    name: string;
  };
  title: string;
  description: string;
  date: string;
  engagements: {
    likes: number;
    comments: number;
    shares: number;
  };
}

export interface User {
  image: ImageData;
  user: string;
  name: string;
  job: string;
  link: {
    title: string;
    url: string;
  };
  statistics: {
    followers: number;
    posts: number;
  };
  posts: PublicationProps[];
}
