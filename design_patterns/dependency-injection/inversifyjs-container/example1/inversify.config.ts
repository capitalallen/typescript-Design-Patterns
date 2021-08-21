import 'reflect-metadata';
import {Container} from 'inversify';
import { ConcreteA } from './concertea';
import { TYPES } from './types';
import {IDepA} from './idepa';
import {IDepB} from './idepb';
import {IDepC} from './idepc';
import {ConcreteC} from './concretec';
import {ConcreteB} from './concreteb';
let container = new Container();

container.bind<IDepA>(TYPES.IDepA).to(ConcreteA);
container.bind<IDepB>(TYPES.IDepB).to(ConcreteB);
container.bind<IDepC>(TYPES.IDepC).to(ConcreteC);

export default container;