'use strict';

describe('myApp.MySQLview module', function() {

  beforeEach(module('myApp.MySQLview'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('MySQLviewCtrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});