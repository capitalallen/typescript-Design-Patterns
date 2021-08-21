## Abstract Factory 
- defines the interfaces of a collection of factory methods, without specifying concrete products.
- the Abstract Factory pattern extracts another part called client that take cres of shaping the outline of the buildign process. 
### Participants
- Abstract Factory: defines the industrial standards of a factory which provide interfaces for manufacturing components or complext products 
- Concrete factory: impolements the interfaces defined by the abstract factory and build concrete products 
    - ExperimentalRocketFatory
    - FreightRocketFactory
- Abstract products: define the interfaces of the products the factories are going to build
    - Rocket, Payload, Stage[]
- concrete products: presents actual products that are manufactured by a concrete factory 
    - ExperimentalRocket/FreightRocket, ExperimentalPayload/Satellite
- Client: arranges the production process across factories 