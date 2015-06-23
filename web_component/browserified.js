(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//podrazumeva se
//ALLEX.sinkFactories = new execlib.lib.Map;
//ALLEX.sinkFactories.add('.',execlib.execSuite.ServicePack.SinkMap.get('user'));

ALLEX.sinkFactories.add('time',require('./sinkmapcreator')(execlib,ALLEX.sinkFactories.get('<parentclass>')));

//usage:
//ALLEX.sinkFactories.get('time').spawn({a:5,b:7},'http://blabla:8835',{name:'bla',password:'blja'}).done(...)

},{"./sinkmapcreator":4}],2:[function(require,module,exports){
module.exports = {
};

},{}],3:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],4:[function(require,module,exports){
function sinkMapCreator(execlib,ParentServicePack){
  var sinkmap = new (execlib.lib.Map), ParentSinkMap = ParentServicePack.SinkMap;
  sinkmap.add('service',require('./sinks/servicesinkcreator')(execlib,ParentSinkMap.get('service')));
  sinkmap.add('user',require('./sinks/usersinkcreator')(execlib,ParentSinkMap.get('user')));
  
  return sinkmap;
}

module.exports = sinkMapCreator;

},{"./sinks/servicesinkcreator":5,"./sinks/usersinkcreator":6}],5:[function(require,module,exports){
function createServiceSink(execlib,ParentSink){

  if(!ParentSink){
    ParentSink = execlib.execSuite.ServicePack.SinkMap.get('user');
  }

  function ServiceSink(prophash,client){
    ParentSink.call(this,prophash,client);
  }
  ParentSink.inherit(ServiceSink,require('../methoddescriptors/serviceuser'));
  
  return ServiceSink;
}

module.exports = createServiceSink;

},{"../methoddescriptors/serviceuser":2}],6:[function(require,module,exports){
function createUserSink(execlib,ParentSink){

  if(!ParentSink){
    ParentSink = execlib.execSuite.ServicePack.SinkMap.get('user');
  }

  function UserSink(prophash,client){
    ParentSink.call(this,prophash,client);
  }
  ParentSink.inherit(UserSink,require('../methoddescriptors/user'));
  
  return UserSink;
}

module.exports = createUserSink;

},{"../methoddescriptors/user":3}]},{},[1]);
