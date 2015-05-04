function createUserSink(execlib,ParentSink){

  if(!ParentSink){
    ParentSink = execlib.execSuite.ServicePack.SinkMap.get('user');
  }

  function UserSink(prophash,client){
    ParentSink.call(this,prophash,client);
  }
  ParentSink.inherit(UserSink,require('../methoddescriptors/user'));
  UserSink.prototype.createStateFilter = function(){
    //TODO: create your filter here
    return null;
  };
  UserSink.prototype.onState = function(item){
    console.log('Time service sink',item);
  };
  
  return UserSink;
}

module.exports = createUserSink;
