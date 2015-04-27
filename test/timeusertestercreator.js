function createTimeUserTester(execlib,Tester){
  var lib = execlib.lib,
      q = lib.q;

  function TimeUserTester(prophash,client){
    Tester.call(this,prophash,client);
    console.log('runNext finish');
    lib.runNext(this.finish.bind(this,0));
  }
  lib.inherit(TimeUserTester,Tester);

  return TimeUserTester;
}

module.exports = createTimeUserTester;
