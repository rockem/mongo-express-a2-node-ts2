import 'reflect-metadata';
import * as mocha from 'mocha';
import * as chai from "chai";
import { AppComponent } from '../../src/public/app/app.component';

const expect = chai.expect;

describe('ItemsComponent', function () {

  it('should be Angular', ()=> {
    expect(new AppComponent().name).to.equal('Angular')
  })
});
