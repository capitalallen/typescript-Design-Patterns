import {Client} from './client';
import {ExperimentRocketFactory, FreightRocketFactory} from './concrete-products'
let client = new Client();

let experimentRocketFactory = new ExperimentRocketFactory();
let freightRocketFactory = new FreightRocketFactory();

let experimentalRocket = client.buildRocket(experimentRocketFactory);