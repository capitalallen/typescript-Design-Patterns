import * as fs from 'fs';
import { IPostservice } from './ipost-service';
import { Post } from './post';


export class PostsService implements IPostservice {
    private _filename = "post.json";
    constructor() {
    }
    getAll(): Promise<Post[]> {
        return new Promise((resolve, reject) => {
            fs.readFile(this._filename, 'utf-8', (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(JSON.parse(data));
            });
        });
    }

    save(post: Post): Promise<void> {
        return new Promise((resolve, reject) => {
            this.getAll().then((posts) => {
                posts.push(post);
                fs.writeFile(this._filename, posts, err => {
                    if (err) {
                        reject(err);
                    }
                    resolve();
                });
            });
        });
    }
}
