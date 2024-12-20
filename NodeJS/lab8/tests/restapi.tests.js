process.env.NODE_ENV = 'test';

const mongoose = require("mongoose");
const User = require('../models/user-model');
const Article = require('../models/article-model');

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
chai.should();
chai.use(chaiHttp);

describe('Users', () => {
    before(async () => {
        try {
            await User.deleteMany({});
            await Article.deleteMany({});
        } catch (err) {
            done(err.message);
        }
    });

    let userID1, userEmail1, userPassword1 = '1234', userToken1, userTokens1;
    let userID2, userEmail2, userPassword2 = '1234', userToken2, userTokens2;

    let articleID1, articleID2;

    it('Post user 1 with validation error', (done) => {
        let user = {
            name: 'Max',
            age: 20,
            email: 'rybacharagmail.com',
            password: userPassword1,
        }
      chai.request(app)
          .post('/users')
          .send(user)
          .end((err, res) => {
                res.should.have.status(401);
                res.body.should.be.a('object');
                res.body.should.have.property('err');
                res.body.err.should.be.eql('users validation failed: email: rybacharagmail.com is not valid');
                done();
          });
    });

    it('Post user 1', (done) => {
        let user = {
            name: 'Max',
            age: 20,
            email: 'rybachara@gmail.com',
            password: userPassword1,
        }
      chai.request(app)
          .post('/users')
          .send(user)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('_id');
                userID1 = res.body._id;
                userEmail1 = res.body.email;
                done();
          });
    });
    
    it('Post user 2', (done) => {
        let user = {
            name: 'Dima',
            age: 20,
            email: 'dimon@gmail.com',
            password: userPassword2,
        }
      chai.request(app)
          .post('/users')
          .send(user)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('_id');
                userID2 = res.body._id;
                userEmail2 = res.body.email;
                done();
          });
    });

    it('Login user 1', (done) => {
        let user = {
            email: userEmail1,
            password: userPassword1,
        }
      chai.request(app)
          .post('/users/login')
          .send(user)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('token');
                res.body.should.have.property('message');
                res.body.message.should.be.eql('success');
                userTokens = res.body.user.tokens;
                userToken1 = res.body.token;
                done();
          });
    });
    
    it('Post article 1 by 1 user', (done) => {
        let article = {
            author: userID1,
            title: 'some title',
            text: 'some text',
        }
      chai.request(app)
          .post('/articles')
          .set('Authorization', `Bearer ${userToken1}`)
          .send(article)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('_id');
                articleID1 = res.body._id;
                done();
          });
    });
    
    it('Post article 2 by 1 user', (done) => {
        let article = {
            author: userID1,
            title: 'some title 2',
            text: 'some text 2',
        }
      chai.request(app)
          .post('/articles')
          .set('Authorization', `Bearer ${userToken1}`)
          .send(article)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('_id');
                articleID2 = res.body._id;
                done();
          });
    });
    
    it('Get user one\'s articles', (done) => {
        chai.request(app)
            .get('/users/me')
            .query({ id: userID1 })
            .set('Authorization', `Bearer ${userToken1}`)
            .end((err, res) => {
                if (err) return done(err);
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.articles.should.be.an('array');
                res.body.articles.length.should.be.eql(2);
                done();
            });
    });
    
    it('Get article by id', (done) => {
        chai.request(app)
            .get(`/article/${articleID1}`)
            .query({user: {id: userID1}})
            .set('Authorization', `Bearer ${userToken1}`)
            .end((err, res) => {
                if (err) return done(err);
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('title');
                res.body.should.have.property('text');
                done();
            });
    });

    it('Logout user 1', (done) => {
        let user = {
            email: userEmail1,
            password: userPassword1,
        }
      chai.request(app)
          .post('/users/logout')
          .query({ user: {tokens: userTokens1} })
          .set('Authorization', `Bearer ${userToken1}`)
          .send(user)
          .end((err, res) => {
                res.should.have.status(200);
                res.text.should.equal('User loged out');
                done();
          });
    });

    it('Login user 2', (done) => {
        let user = {
            email: userEmail2,
            password: userPassword2,
        }
      chai.request(app)
          .post('/users/login')
          .send(user)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('token');
                res.body.should.have.property('message');
                res.body.message.should.be.eql('success');
                userTokens = res.body.user.tokens;
                userToken2 = res.body.token;
                done();
          });
    });

    it('Post article 3 by 2 user', (done) => {
        let article = {
            author: userID2,
            title: 'some title 3',
            text: 'some text 3',
        }
      chai.request(app)
          .post('/articles')
          .set('Authorization', `Bearer ${userToken2}`)
          .send(article)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('_id');
                articleID2 = res.body._id;
                done();
          });
    });

    it('Get user second\'s articles', (done) => {
        chai.request(app)
            .get('/users/me')
            .query({ id: userID2 })
            .set('Authorization', `Bearer ${userToken2}`)
            .end((err, res) => {
                if (err) return done(err);
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.articles.should.be.an('array');
                res.body.articles.length.should.be.eql(1);
                done();
            });
    });

    it('Get article by id', (done) => {
        chai.request(app)
            .get(`/article/${articleID1}`)
            .query({user: {id: userID2}})
            .set('Authorization', `Bearer ${userToken2}`)
            .end((err, res) => {
                if (err) return done(err);
                res.should.have.status(404);
                res.body.should.be.a('object');
                res.body.should.have.property('err');
                res.body.err.should.be.eql('Not Found');
                done();
            });
    });

    it('Logout user 2', (done) => {
        let user = {
            email: userEmail2,
            password: userPassword2,
        }
      chai.request(app)
          .post('/users/logout')
          .query({ user: {tokens: userTokens2} })
          .set('Authorization', `Bearer ${userToken2}`)
          .send(user)
          .end((err, res) => {
                res.should.have.status(200);
                res.text.should.equal('User loged out');
                done();
          });
    });

    it('Get article by id', (done) => {
        chai.request(app)
            .get(`/article/${articleID1}`)
            .set('Authorization', `Bearer ${null}`)
            .end((err, res) => {
                if (err) return done(err);
                res.should.have.status(403);
                done();
            });
    });
});