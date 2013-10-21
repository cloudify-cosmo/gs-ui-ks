'use strict';

angular.module('gsUiKsApp')
    .controller('TopologyCtrl', ['$scope', '$filter', 'Layout', 'Render', 'gs.config', function ($scope, $filter, Layout, Render, gsConfig) {

        $scope.data = {
            graph: {
                /*
                'nodes': [{
            'id': 1,
            'name': 'vagrant_host',
            'type': ['cloudify.tosca.types.host']
        }, {
            'id': 2,
            'name': 'pickle_db',
            'type': ['cloudify.tosca.types.db_server', 'cloudify.tosca.types.middleware_server']
        }, {
            'id': 3,
            'name': 'flask',
            'type': ['cloudify.tosca.types.web_server', 'cloudify.tosca.types.middleware_server']
        }, {
            'id': 4,
            'name': 'flask_app',
            'type': ['cloudify.tosca.types.app_module']
        }],
            'edges': [{
            'type': 'contained_in',
            'source': 2,
            'target': 1
        }, {
            'type': 'contained_in',
            'source': 3,
            'target': 1
        }, {
            'type': 'contained_in',
            'source': 4,
            'target': 3
        }, {
            'type': 'connected_to',
            'source': 4,
            'target': 2
        }]
                */
                'nodes': [
                    {
                        'id': 9,
                        'name': 'Network',
                        'type': ['cloudify.tosca.types.network']
                    },
                    {
                        'id': 10,
                        'name': 'Tier',
                        'type': ['cloudify.tosca.types.tier']
                    },
                    {
                        'id': 11,
                        'name': 'Host A',
                        'type': ['cloudify.tosca.types.host']
                    },
                    {
                        'id': 12,
                        'name': 'Host B',
                        'type': ['cloudify.tosca.types.host']
                    },
                    {
                        'id': 13,
                        'name': 'Host C',
                        'type': ['cloudify.tosca.types.host']
                    },
                    {
                        'id': 14,
                        'name': 'Pickle',
                        'type': ['cloudify.tosca.types.db_server', 'cloudify.tosca.types.middleware_server']
                    },
                    {
                        'id': 15,
                        'name': 'Flask',
                        'type': ['cloudify.tosca.types.web_server', 'cloudify.tosca.types.middleware_server']
                    },
                    {
                        'id': 16,
                        'name': 'App',
                        'type': ['cloudify.tosca.types.app_module']
                    }
                ],
                'edges': [
                    {
                        'type': 'contained_in',
                        'source': 10,
                        'target': 9
                    },
                    {
                        'type': 'contained_in',
                        'source': 11,
                        'target': 10
                    },
                    {
                        'type': 'contained_in',
                        'source': 12,
                        'target': 10
                    },
                    {
                        'type': 'contained_in',
                        'source': 13,
                        'target': 10
                    },
                    {
                        'type': 'contained_in',
                        'source': 14,
                        'target': 12
                    },
                    {
                        'type': 'contained_in',
                        'source': 15,
                        'target': 12
                    },
                    {
                        'type': 'contained_in',
                        'source': 16,
                        'target': 15
                    },
                    {
                        'type': 'connected_to',
                        'source': 11,
                        'target': 12
                    }
                ]
            },
            tree: {
                'id': 'root',
                'children': [
                    {
                        'id': 0,
                        'type': ['cloudify.tosca.types.network'],
                        'dependencies': [3],
                        'children': [
                            {
                                'id': 2,
                                'type': ['cloudify.tosca.types.tier'],
                                'children': [
                                    {
                                        'id': 3,
                                        'type': ['cloudify.tosca.types.host'],
                                        'children': [
                                            {
                                                'id': 4,
                                                'type': ['cloudify.tosca.types.web_server', 'cloudify.tosca.types.middleware_server'],
                                                'children': [
                                                    {
                                                        'id': 5,
                                                        'type': ['cloudify.tosca.types.app_module']
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                'id': 1,
                                'type': ['cloudify.tosca.types.tier'],
                                'dependencies': [4, 5]
                            }
                        ]
                    }
                ]
            }
        };

        $scope.currData = function() {
            return $filter('json')($scope.data.graph);
        };

        $scope.code = {
            data: $scope.currData(),
            initial: $scope.currData()
        };

        $scope.codeDataAsObject = function() {
            return angular.fromJson($scope.code.data);
        };

        $scope.apply = function () {
            $scope.data.graph = $scope.codeDataAsObject();
        };

        $scope.reset = function () {
            $scope.code.data = $scope.code.initial;
            $scope.data.graph = $scope.codeDataAsObject();
        };

        $scope.layouter = Layout.Topology.Tensor.init(gsConfig.topologyLayout);
        $scope.renderer = Render.Topology.D3;



        // TODO why not working?
        $scope.tabs = [
            // TODO is there a better way to get source code (perhaps $http or $resource)?
            {
                title: $scope.tabsMeta.html.title,
                content: '<topology data="data.graph" layouter="layouter"></topology>'
            },
            {
                title: $scope.tabsMeta.javascript.title,
                content: '$scope.data = ' + JSON.stringify($scope.data.graph, null, 2)
            }
        ];

    }]);
