## Builder 
- While Factory Patterns expose the internal components (such as the payload and stages of a rocket), the Builder Pattern encapsulates them by exposing only the building steps and provides the final products directly. 
### Participants
- Builder: RocketBuilder
    - Defines the interface of a builder that builds products. 
- Concrete builder: FalconBuilder
    - Implements methods that build parts of the products, and keeps track of the current building state.
- Director
    - Defines the steps and collaborates with builders to build products. 
- Final product: Falcon
    - The product built by a builder.