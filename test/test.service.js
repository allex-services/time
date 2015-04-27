var execlib=require('hers_exectesting')();

execlib.test({
  debug_brk: false,
  debug: false,
  name:'Time',
  modulepath:'./index.js',
  propertyhash: {
  }
},{
  debug_brk: false,
  debug: false,
  tests:[
  {
    count:2,
    role: 'service',
    tester:{
      count:2,
      modulepath:'./test/timeservicetestercreator',
      propertyhash:{
      }
    }
  },
  {
    count:2,
    role: 'user',
    tester:{
      count:2,
      modulepath:'./test/timeusertestercreator',
      propertyhash:{
      }
    }
  } 
  ]
});

