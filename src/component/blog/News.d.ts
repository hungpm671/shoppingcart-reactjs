type Posts = {
  id: number;
  title: string;
  body: string;
  tags: Array[];
  reactions: Reactions;
  views: number;
  username: string;
};

type Reactions = {
  likes: number;
  dislikes: number;
};
