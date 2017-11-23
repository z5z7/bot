import * as dotenv from 'dotenv';
dotenv.config();
import {MortFunc} from "../../src/mortgageFunc";

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var request = chai.request;
var should = chai.should();

chai.use(chaiHttp);

describe('HSBC Service Mortgage Functions', () => {

    // todo

});