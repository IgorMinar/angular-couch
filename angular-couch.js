/*!
 * angular couchdb service
 *
 * Copyright 2010, Igor Minar
 * Licensed under the MIT license.
 *
 * This is an almost completely incomplete couchdb service, implemented
 * as thin wrapper around jquery-couch.js.
 *
 * Over time it might turned out to be the best couchdb adapter for angular,
 * but right now it's just a proof of concept.
 *
 */

/**
 * angular service exposing jquery couch for DI
 */
angular.service('jQueryCouch', function() {
  return $.couch;
});


/**
 * angular couch service
 */
angular.service('couch', function(jQueryCouch) {
  var root = this;

  return {
    allDbs: function() {
      var dbs = [];

      jQueryCouch.allDbs({
        success: function(allDbs) {
          angular.copy(allDbs, dbs);
          root.$eval();
        }
      });

     return dbs;
    }
  }
}, {$inject: ["jQueryCouch"], $creation: "eager-published"});

