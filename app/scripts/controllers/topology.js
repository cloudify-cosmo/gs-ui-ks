'use strict';

angular.module('gsUiKsApp')
    .controller('TopologyCtrl', function ($scope) {

        $scope.topology = {
            "graphData": {
                "nodes": [
                    {
                        "id": 0,
                        "name": "vagrant_host",
                        "type": ["cloudify.tosca.types.host"]
                    },
                    {
                        "id": 1,
                        "name": "pickle_db",
                        "type": ["cloudify.tosca.types.db_server", "cloudify.tosca.types.middleware_server"]
                    },
                    {
                        "id": 2,
                        "name": "flask",
                        "type": ["cloudify.tosca.types.web_server", "cloudify.tosca.types.middleware_server"]
                    },
                    {
                        "id": 3,
                        "name": "flask_app",
                        "type": ["cloudify.tosca.types.app_module"]
                    }
                ],
                "edges": [
                    {
                        "type": "contained_in",
                        "source": 1,
                        "target": 0
                    },
                    {
                        "type": "contained_in",
                        "source": 2,
                        "target": 0
                    },
                    {
                        "type": "contained_in",
                        "source": 3,
                        "target": 2
                    },
                    {
                        "type": "connected_to",
                        "source": 3,
                        "target": 1
                    }
                ]
            },
            "treeData": {

            }
        };
    });
