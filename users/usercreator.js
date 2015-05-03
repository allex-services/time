function createUser(execlib,ParentUser){

  if(!ParentUser){
    ParentUser = execlib.execSuite.ServicePack.Service.prototype.userFactory.get('user');
  }
  var execSuite = execlib.execSuite,
    StreamSinkBunch = execSuite.StreamSinkBunch,
    StatePathListener = execSuite.StatePathListener;

  function userStateFiltorCtor(){
    return new StatePathListener(['time']);
  };

  function User(prophash){
    ParentUser.call(this,prophash);
  }
  ParentUser.inherit(User,require('../methoddescriptors/user'),userStateFiltorCtor);

  return User;
}

module.exports = createUser;
