function createServicePack(execlib){
  var execSuite = execlib.execSuite;
  ParentServicePack = execSuite.ServicePack;
  return {
    Service: require('./servicecreator')(execlib,ParentServicePack),
    SinkMap: require('./sinkmapcreator')(execlib,ParentServicePack)
  };
}

module.exports = createServicePack;
