function createUser(execlib,ParentUser){
  'use strict';

  if(!ParentUser){
    ParentUser = execlib.execSuite.ServicePack.Service.prototype.userFactory.get('user');
  }
  var execSuite = execlib.execSuite,
    StateSource = execSuite.StateSource,
    StatePathListener = execSuite.StatePathListener;

  function MSS(){
    StateSource.apply(this,arguments);
  }
  execlib.lib.inherit(MSS,StateSource);
  MSS.prototype.onStream = function(item){
    console.log('MSS onStream',item);
    return StateSource.prototype.onStream.call(this, item);
  };

  function userStateFiltorCtor(){
    return StateSource.chain([new StatePathListener(['time']),new MSS]);
  };

  function User(prophash){
    ParentUser.call(this,prophash);
  }
  ParentUser.inherit(User,require('../methoddescriptors/user'),userStateFiltorCtor);

  User.prototype.setActive = function (active, defer) {
    this.__service.setActive(active);
    defer.resolve(true);
  };

  return User;
}

module.exports = createUser;
