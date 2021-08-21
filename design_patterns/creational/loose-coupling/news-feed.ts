import { IPostservice } from './ipost-service';



export class NewsFeed {
    constructor(private _service: IPostservice) {
    }
    show() {
        this._service.getAll().then(posts => {
            posts.forEach(post => {
                console.log(post);
            });
        });
    }
}
