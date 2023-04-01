import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import teamsModel from '../database/models/Teams';
import  teamsService from '../services/teams.service';
import Users from '../database/models/Users';
import userMock from './mock/user.mock';
// import token from './mock/token.mock';
import { Model } from 'sequelize';

chai.use(chaiHttp);

const { expect } = chai;

describe('Validando o login POST/LOGIN', () => {
  
  afterEach(() => sinon.restore());

  describe('Se algum campo estiver errado:', () => {
    it('devera retornar um erro 400, com a menssagem:"All fields must be filled"', async () => {
      const httpResponse = await chai.request(app).post('/login').send({});

      expect(httpResponse.status).to.equal(400);
      expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' });
    });

    it('devera retornar um erro 400, se o email não for informado', async () => {
      const httpResponse = await chai.request(app).post('/login').send({
        password: 'secret_user',
      });

      expect(httpResponse.status).to.equal(400);
      expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' });
    });

    it('devera retornar um erro 400, se o password não for informado', async () => {
      const httpResponse = await chai.request(app).post('/login').send({
        email: 'user@user.com',
      });

      expect(httpResponse.status).to.equal(400);
      expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' });
    });
  });

  describe('Se algum parametro estiver diferente da regra:', () => {

    it('devera retornar um erro 401, se o password for menor que 6 caracteres', async () => {
      const httpResponse = await chai.request(app).post('/login').send({
        email: 'user@user.com',
        password: 'sec',
      });
      
      expect(httpResponse.status).to.equal(401);
      expect(httpResponse.body).to.deep.equal({ message: 'Invalid email or password' });
    });

    it('devera retornar um erro 401, se não for um email valido', async () => {
      const httpResponse = await chai.request(app).post('/login').send({
        email: 'useruser.com',
        password: 'secret_user',
      });
      
      expect(httpResponse.status).to.equal(401);
      expect(httpResponse.body).to.deep.equal({ message: 'Invalid email or password' });
    });
  });

  describe('Se tudo estiver correto:', () => {
    it('devera retornar um token', async () =>{
      const httpResponse = await chai.request(app).post('/login').send({
        email: 'user@user.com',
        password: 'secret_user',
      });
      
      expect(httpResponse.status).to.equal(200);
      // expect(httpResponse.body).to.deep.equal(token);
    });
  });

  describe('Se não for um email  cadastrado ou password valido:', () => {
    it('devera retornar um erro não sendo email valido', async () => {
      sinon.stub(Model, 'findOne').resolves(userMock as Users);

      const httpResponse = await  chai.request(app).post('/login').send({
        email: 'felipe@user.com',
        password: 'secret_user',
      });

      expect(httpResponse.status).to.equal(401);
      expect(httpResponse.body).to.be.deep.equal({ message: 'Invalid email or password' });
    });

    // it('devera retornar um erro não sendo password valido', async () => {
    //   sinon.stub(Model, 'findOne').resolves(userMock as Users);

    //   const httpResponse = await chai.request(app).post('/login').send({
    //     email: 'user@user.com',
    //     password: 'secret_userrrr',
    //   });

    //   expect(httpResponse.status).to.equal(401);
    //   expect(httpResponse.body).to.be.deep.equal({ message: 'Invalid email or password' });
    // });
  });
});

describe('validando a rota GET(/login/role)', () => {

  afterEach(() => sinon.restore());

  describe('se não encontrar um usuario com o id valido', () => {
    it('devera retornar um erro', async () => {

      sinon.stub(Model, 'findOne').resolves(null);
      const httpResponse = await chai.request(app).get('/login/role');

      expect(httpResponse.status).to.be.equal(401);
      expect(httpResponse.body).to.be.deep.equal({ message: 'Erro user' });
    });
  });
});
