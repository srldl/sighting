/* directive */

var fileInput =  function($parse){
       'use strict';
      return {
        restrict:'A',
    link:function(scope,elm,attrs){
          elm.bind('change', function(){
        $parse(attrs, fileInput).assign(scope,elm[0].files);
      scope.$apply();
      console.log("directive");
      console.log(scope);
    });
  }
};
};

module.exports = fileInput;
