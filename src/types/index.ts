export interface IQuote {
    id: number,
    author: string,
    quote: string
}

export interface IProduct {
    id: number,
    title: string,
    thumbnail: string,
    price: number,
    brand: string;     
    category: string; 
}

export interface IComment {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
  };
}


export interface IPost {
    id: number,
    body: string,
    title: string,
    userId: number;   
   tags: string[];   
    reactions: number;
}

export interface IRecipe {
    id: number,
    servings: number,
    name: string,
    image: string
}