import { JsonPlacehodlerFacade } from "./json-placeholder-facade";
import { JsonPlaceholderService } from "./json-placeholder-service";

let facade = new JsonPlacehodlerFacade(new JsonPlaceholderService());
facade.getUser(1).then(user=>{
    if (user){
        console.log('User found:', user);
    } else {
        console.log("User not found")
    }
}).catch(err=>{
    console.log(err)
})