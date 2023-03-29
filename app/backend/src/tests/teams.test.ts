import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import teamsModel from '../database/models/Teams';
import  teamsService from '../services/teams.service';
import teamsMock from './mock/teams.mock';
import teamsMock1 from './mock/teams1.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Verifica se retorna todos os teams', () => {
  // it('Retorna todos os teams como getAll', async () => {
    
  //   sinon.stub(teamsModel, 'findAll').resolves(teamsMock as teamsModel[]);

  //   const resultGetAll = await teamsService.getAll();

  //   expect(resultGetAll).to.be.deep.equal(teamsMock);

  //     sinon.restore();
  // });
  it('Retorna todos os teams como getAll', async () => {
      before(async () => {
    sinon.stub(teamsModel, 'findAll').resolves(teamsMock as teamsModel[]);
  });
    const response = await chai.request(app).get('/teams');
    
    expect(response.status).to.be.equals(200);
    expect(response.body).to.be.deep.equal(teamsMock);
    
    sinon.restore();
    
  });
});

describe('Verifica se retorna um time', () => {
  it('Retorna um time especifico pelo id', async () => {
    before(async () => {
      sinon.stub(teamsModel, 'findOne').resolves(teamsMock1 as teamsModel);
    });
      const response = await chai.request(app).get('/teams/12');
      
      expect(response.status).to.be.equals(200);
      expect(response.body).to.be.deep.equal(teamsMock1);
      
      sinon.restore();
  });
});