export function disable(target: Object, methodName: string, descriptor: PropertyDescriptor){
    descriptor.value = ()=>{
        throw new Error("method not available")
    }
}

export class Test {
    // @disable
    foo(){
        console.log("foo");
    }
    bar() {
        console.log("bar");
    }

}

let test = new Test();
test.foo();
test.bar();