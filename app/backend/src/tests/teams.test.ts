import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import teamsModel from '../database/models/Teams';
import  teamsService from '../services/teams.service';
import { teams, teams1 } from './mock/teams.mock';

chai.use(chaiHttp);

const { expect } = chai;

// describe('Seu teste', () => {
//   /**
//    * Exemplo do uso de stubs com tipos
//    */

//   // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

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

describe('Verifica se retorna todos os teams', () => {
  // it('Retorna todos os teams como getAll', async () => {
    
  //   sinon.stub(teamsModel, 'findAll').resolves(teamsMock as teamsModel[]);

  //   const resultGetAll = await teamsService.getAll();

  //   expect(resultGetAll).to.be.deep.equal(teamsMock);

  //     sinon.restore();
  // });
  it('Retorna todos os teams como getAll', async () => {
      before(async () => {
    sinon.stub(teamsModel, 'findAll').resolves(teams as teamsModel[]);
  });
    const response = await chai.request(app).get('/teams');
    
    expect(response.status).to.be.equals(200);
    expect(response.body).to.be.deep.equal(teams);
    
    sinon.restore();
    
  });
});

describe('Verifica se retorna um time', () => {
  it('Retorna um time especifico pelo id', async () => {
    before(async () => {
      sinon.stub(teamsModel, 'findOne').resolves(teams1 as teamsModel);
    });
      const response = await chai.request(app).get('/teams/12');
      
      expect(response.status).to.be.equals(200);
      expect(response.body).to.be.deep.equal(teams1);
      
      sinon.restore();
  });
});