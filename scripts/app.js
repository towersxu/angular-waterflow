/*
 * angular-deckgrid-demo
 *
 * Copyright(c) 2013 Andr¨¦ K?nig <akoenig@posteo.de>
 * MIT Licensed
 *
 */

/**
 * @author Andr¨¦ K?nig (andre.koenig@posteo.de)
 *
 */

angular.module('akoenig.deckgrid.demo', [
    'ngRoute',
    'akoenig.deckgrid'
]);

angular.module('akoenig.deckgrid.demo').config([

    '$routeProvider',

    function configure ($routeProvider) {

        'use strict';

        $routeProvider.when('/', {
            controller: 'HomeController',
            templateUrl: 'home.html'
        });

    }
]);