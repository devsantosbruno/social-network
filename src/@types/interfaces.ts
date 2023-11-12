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
}
