import { IPostservice } from './ipost-service';
import {Post} from './post';


export class MockPostsService implements IPostservice {
    private posts: Post[] = [];
    constructor() {
        this.posts = [
            { id: 1, title: 'a', body: 'title 1', postBy: 'me' },
            { id: 2, title: 'b', body: 'title 2', postBy: 'b' }
        ];
    }
    getAll(): Promise<Post[]> {
        return Promise.resolve(this.posts);
    }

    save(post: Post): Promise<void> {
        this.posts.push(post);
        return Promise.resolve();
    }
}
