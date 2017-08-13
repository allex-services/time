function createTimeService(execlib,ParentService){
  'use strict';
  var lib = execlib.lib;

  function factoryCreator(parentFactory){
    return {
      'service': require('./users/serviceusercreator')(execlib,parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib,parentFactory.get('user')) 
    };
  }

  function TimeService(prophash){
    ParentService.call(this,prophash);
    this.state.set('active', true);
    this.start = Date.now();
    this.ticks = 0;
    this.tick();
  }
  ParentService.inherit(TimeService,factoryCreator);
  TimeService.prototype.tick = function(){
    var currtime, nextin;
    if(this.state && !this.state.get('closed')){
      currtime = Date.now();
      this.ticks++;
      nextin = this.start+this.ticks*1000-currtime;
      if (this.state.get('active')) {
        this.state.set('time',currtime);
        console.log('tick! next in',nextin);
      }
      lib.runNext(this.tick.bind(this),nextin);
    }
  };
  TimeService.prototype.setActive = function (active) {
    this.state.set('active', active);
  };
  
  return TimeService;
}

module.exports = createTimeService;
