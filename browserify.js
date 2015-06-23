//podrazumeva se
//ALLEX.sinkFactories = new execlib.lib.Map;
//ALLEX.sinkFactories.add('.',execlib.execSuite.ServicePack.SinkMap.get('user'));

ALLEX.sinkFactories.add('time',require('./sinkmapcreator')(execlib,ALLEX.sinkFactories.get('<parentclass>')));

//usage:
//ALLEX.sinkFactories.get('time').spawn({a:5,b:7},'http://blabla:8835',{name:'bla',password:'blja'}).done(...)
