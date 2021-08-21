export class IoContainer {
    private static _instance: IoContainer = new IoContainer();
    private _dependencies: {[key:string]: Object} = {};

    private constructor(){
        if (IoContainer._instance){
            throw new Error("Singleton class. Cannot instantiate using new")
        }
        IoContainer._instance = this;
    }

    public static get instance(): IoContainer {
        return IoContainer._instance;
    }

    register(name: string, dependencies: string[], implementation: any){
        if (this._dependencies[name]){
            throw new Error("Dependency already exists")
        }
        let dependenciesImplementations = this.getDependenciesImplementations(dependencies);
        this._dependencies[name] = new implementation(...dependenciesImplementations);
    }
    resolve(name:string):Object{
        if (!this._dependencies[name]){
            throw new Error(`Unresolved dependency ${name}`);
        }
        return this._dependencies[name];
    }
    private getDependenciesImplementations(name: string[]): Object[]{
        return name.map(name=>this.resolve(name));
    }
}