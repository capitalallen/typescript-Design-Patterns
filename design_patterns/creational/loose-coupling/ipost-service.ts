import { Post } from './post';


export interface IPostservice {
    getAll(): Promise<Post[]>;
    save(post: Post): Promise<void>;
}
