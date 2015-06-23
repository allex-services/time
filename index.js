function createServicePack(execlib){
  'use strict';

  var execSuite = execlib.execSuite,
    ParentServicePack = execSuite.registry.get('.');

  return {
    Service: require('./servicecreator')(execlib,ParentServicePack),
    SinkMap: require('./sinkmapcreator')(execlib,ParentServicePack)
  };
}

module.exports = createServicePack;
