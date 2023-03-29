import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import teamsModel from '../database/models';
import  teamsService from '../services/teams.service';
import teamsMock from './mock/teams.mock';

chai.use(chaiHttp);

const { expect } = chai;

// describe('Seu teste', () => {
//   /**
//    * Exemplo do uso de stubs com tipos
//    */

//   // let chaiHttpResponse: Response;

//   // before(async () => {
//   //   sinon
//   //     .stub(Example, "findOne")
//   //     .resolves({
//   //       ...<Seu mock>
//   //     } as Example);
//   // });

//   // after(()=>{
//   //   (Example.findOne as sinon.SinonStub).restore();
//   // })

//   // it('...', async () => {
//   //   chaiHttpResponse = await chai
//   //      .request(app)
//   //      ...

//   //   expect(...)
//   // });

//   it('Seu sub-teste', () => {
//     expect(false).to.be.eq(true);
//   });
// });

// describe('Verifica se retorna todos os teams', () => {
//   it('Retorna todos os teams como getAll', async () => {
//     sinon.stub(teamsModel, 'getAll').resolves(teamsMock);

//     const resultGetAll = await teamsService.getAll();

//     expect(resultGetAll).to.equal(teamsMock);
//   });

//   it('', () => {

//   });
// });

