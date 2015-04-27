function createTimeService(execlib,ParentServicePack){
  var lib = execlib.lib;
  var ParentService = ParentServicePack.Service;

  function factoryCreator(parentFactory){
    return {
      'service': require('./users/serviceusercreator')(execlib,parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib,parentFactory.get('user')) 
    };
  }

  function TimeService(prophash){
    ParentService.call(this,prophash);
    this.tick();
  }
  ParentService.inherit(TimeService,factoryCreator);
  TimeService.prototype.tick = function(){
    if(this.state && !this.state.get('closed')){
      this.state.set('time',Date.now());
      lib.runNext(this.tick.bind(this),1000);
    }
  };
  
  return TimeService;
}

module.exports = createTimeService;
