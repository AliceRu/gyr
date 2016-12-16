angular.module("new",[]).directive("new",[function(){
    return {
      restrict:"ECMA",
      templateUrl:"views/main.html",
      scope:{data:'=gyr',data2:'@gyr2',img:'=gyr3'},
      replace:true,

    }
}]).filter("f",[function(){
    return function(elength){
      if(elength.length>12){
        return elength.substr(0,12)+'...'

      }else{
        return elength
      }
        
    }
}]);
