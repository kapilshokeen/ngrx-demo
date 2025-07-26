export interface Post {
  userid: number;
  user: {
    imageUrl: string;
    fullName: string;
  };
  id: number;
  title: string;
  body: string;
};
