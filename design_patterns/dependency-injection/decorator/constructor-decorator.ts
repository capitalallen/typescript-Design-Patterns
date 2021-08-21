// constructor decorator
// a decorator factory
export function capitalize() {
    /**
     *  a generic function where the generic indicator, T type, extends a specific type that resembles the constructor
     * 
     * just mean that just want T (the type of constructor arguments) to 
     * extend a method that can be invoked with new that can accept 
     * any amounts of arguments and return an object.
     * 
     * Basically, weird way of saying  that we want T to be constructor
     */
  
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    // return a consturctor function 
    // need to return a class that extends constructor
    return class extends constructor {
      _a = "A";
      _b = "B";
    };
  };
}
@capitalize()
export class Test {
  private _a = "a";
  private _b = "b";
  foo() {
    console.log("foo");
  }
  bar() {
    console.log(this._a, this._b);
  }
}

let test = new Test();
test.foo();
test.bar();
