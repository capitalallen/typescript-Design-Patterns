// before hook 
// actual factory that accepts the hook 
export function before(hook: Function){
    // return the actual function that will take 3 arguments 
    // since we return it inside the factory,we have access to the hook function 
    return function<T extends Function>(target: Object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor{
        // return a new property descriptor that will override the actual property descritor in the method itself
        return {
            get: function(this: T){
                // hard binding 
                let originalMethod = descriptor.value!.bind(this);
                hook = hook.bind(this);
                
                return ()=>{
                    hook();
                    originalMethod();
                    // hook();
                }
            }
        }
    }
}


export class Test {
    foo(){
        console.log("foo");
    }
    @before(()=>{
        console.log('before hook');
    })
    bar() {
        console.log("bar");
    }

}

let test = new Test();
test.foo();
test.bar();