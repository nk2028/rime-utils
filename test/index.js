const RimeUtils = require('../index');
const chai = require('chai');
const should = chai.should();

const m = RimeUtils.readRimeDict('test/terra_pinyin.dict.yaml');

function test() {
  m.get('㐤')[0].should.equal('qiu2');
  m.get('赤誠相待')[0].should.equal('chi4 cheng2 xiang1 dai4');
}

test();
