'use strict';

angular.module('gsUiKsApp')
    .controller('TopologyCtrl', ['$scope', '$filter', 'Layout', 'Render', function ($scope, $filter, Layout, Render) {

        $scope.data = {
            graph: {
                'nodes': [
                    {
                        'id': 0,
                        'name': 'Tier A',
                        'type': ['cloudify.tosca.types.tier']
                    },
                    {
                        'id': 1,
                        'name': 'Vagrant Host',
                        'type': ['cloudify.tosca.types.host']
                    },
                    {
                        'id': 2,
                        'name': 'Pickle DB',
                        'type': ['cloudify.tosca.types.db_server', 'cloudify.tosca.types.middleware_server']
                    },
                    {
                        'id': 3,
                        'name': 'Flask',
                        'type': ['cloudify.tosca.types.web_server', 'cloudify.tosca.types.middleware_server']
/*
                    },
                    {
                        'id': 3,
                        'name': 'Flask App',
                        'type': ['cloudify.tosca.types.app_module']
*/
/*
                    },
                    {
                        'id': 5,
                        'name': 'network_b',
                        'type': ['cloudify.tosca.types.network']
                    },
                    {
                        'id': 6,
                        'name': 'tier',
                        'type': ['cloudify.tosca.types.tier']
*/
                    }
                ],
                'edges': [
                    {
                        'type': 'contained_in',
                        'source': 1,
                        'target': 0
                    },
                    {
                        'type': 'contained_in',
                        'source': 2,
                        'target': 1
                    },
                    {
                        'type': 'contained_in',
                        'source': 3,
                        'target': 1
                    },
                    {
                        'type': 'connected_to',
                        'source': 1,
                        'target': 2
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

        $scope.layouter = Layout.Topology.Tensor;
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
