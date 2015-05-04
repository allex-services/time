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
    this.start = Date.now();
    this.ticks = 0;
    this.tick();
  }
  ParentService.inherit(TimeService,factoryCreator);
  TimeService.prototype.tick = function(){
    if(this.state && !this.state.get('closed')){
      var currtime = Date.now();
      this.state.set('time',currtime);
      this.ticks++;
      var nextin = this.start+this.ticks*1000-currtime;
      console.log('tick! next in',nextin);
      lib.runNext(this.tick.bind(this),nextin);
    }
  };
  
  return TimeService;
}

module.exports = createTimeService;
