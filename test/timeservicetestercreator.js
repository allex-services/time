function createTimeServiceTester(execlib,Tester){
  'use strict';
  var lib = execlib.lib,
      q = lib.q;

  function TimeServiceTester(prophash,client){
    Tester.call(this,prophash,client);
    console.log('runNext finish');
    lib.runNext(this.finish.bind(this,0));
  }
  lib.inherit(TimeServiceTester,Tester);

  return TimeServiceTester;
}

module.exports = createTimeServiceTester;
