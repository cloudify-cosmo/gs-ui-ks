'use strict';

angular.module('gsUiKsApp')
    .controller('TopologyCtrl', ['$scope', '$filter', 'Layout', 'Render', 'gs.config', function ($scope, $filter, Layout, Render, gsConfig) {

        $scope.data = {
            graph:

            /*
            {
                'nodes': [
                    {
                        'id': 9,
                        'name': 'Network',
                        'type': ['cloudify.types.network']
                    },
                    {
                        'id': 10,
                        'name': 'Tier',
                        'type': ['cloudify.types.tier']
                    },
                    {
                        'id': 11,
                        'name': 'Host A',
                        'type': ['cloudify.types.host']
                    },
                    {
                        'id': 12,
                        'name': 'Host B',
                        'type': ['cloudify.types.host']
                    },
                    {
                        'id': 13,
                        'name': 'Host C',
                        'type': ['cloudify.types.host']
                    },
                    {
                        'id': 14,
                        'name': 'Pickle',
                        'type': ['cloudify.types.db_server', 'cloudify.types.middleware_server']
                    },
                    {
                        'id': 15,
                        'name': 'Flask',
                        'type': ['cloudify.types.web_server', 'cloudify.types.middleware_server']
                    },
                    {
                        'id': 16,
                        'name': 'App',
                        'type': ['cloudify.types.app_module']
                    }
                ],
                'edges': [
                    {
                        'type': 'cloudify.relationships.contained_in',
                        'source': 10,
                        'target': 9
                    },
                    {
                        'type': 'cloudify.relationships.contained_in',
                        'source': 11,
                        'target': 10
                    },
                    {
                        'type': 'cloudify.relationships.contained_in',
                        'source': 12,
                        'target': 10
                    },
                    {
                        'type': 'cloudify.relationships.contained_in',
                        'source': 13,
                        'target': 10
                    },
                    {
                        'type': 'cloudify.relationships.contained_in',
                        'source': 14,
                        'target': 12
                    },
                    {
                        'type': 'cloudify.relationships.contained_in',
                        'source': 15,
                        'target': 12
                    },
                    {
                        'type': 'cloudify.relationships.contained_in',
                        'source': 16,
                        'target': 15
                    },
                    {
                        'type': 'cloudify.relationships.connected_to',
                        'source': 13,
                        'target': 9
                    }
                ]
            }
            */

            /*
        {
            "nodes": [
                {
                    "id": 1,
                    "name": "webserver_host",
                    "type": [
                        "mezzanine_host",
                        "cloudify.types.host"
                    ]
                },
                {
                    "id": 2,
                    "name": "postgres_host",
                    "type": [
                        "mezzanine_host",
                        "cloudify.types.host"
                    ]
                },
                {
                    "id": 3,
                    "name": "nginx",
                    "type": [
                        "mezzanine_middleware",
                        "cloudify.types.middleware_server"
                    ]
                },
                {
                    "id": 4,
                    "name": "unicorn",
                    "type": [
                        "mezzanine_middleware",
                        "cloudify.types.middleware_server"
                    ]
                },
                {
                    "id": 5,
                    "name": "postgres_server",
                    "type": [
                        "mezzanine_middleware",
                        "cloudify.types.middleware_server"
                    ]
                },
                {
                    "id": 6,
                    "name": "postgres_server_db",
                    "type": [
                        "mezzanine_app_module",
                        "cloudify.types.app_module"
                    ]
                },
                {
                    "id": 7,
                    "name": "mezanine_app",
                    "type": [
                        "mezzanine_app_module",
                        "cloudify.types.app_module"
                    ]
                }
            ],
            "edges": [
                {
                    "source": 3,
                    "target": 4,
                    "type": "cloudify.relationships.connected_to"
                },
                {
                    "source": 3,
                    "target": 1,
                    "type": "cloudify.relationships.contained_in"
                },
                {
                    "source": 4,
                    "target": 1,
                    "type": "cloudify.relationships.contained_in"
                },
                {
                    "source": 5,
                    "target": 2,
                    "type": "cloudify.relationships.contained_in"
                },
                {
                    "source": 6,
                    "target": 5,
                    "type": "cloudify.relationships.contained_in"
                },
                {
                    "source": 7,
                    "target": 4,
                    "type": "cloudify.relationships.contained_in"
                },
                {
                    "source": 7,
                    "target": 6,
                    "type": "cloudify.relationships.connected_to"
                }
            ]
        }
        */

            {
                "nodes": [
                    {
                        "id": 1,
                        "name": "mezzanine_netwrok",
                        "type": [
                            "cloudify.types.network"
                        ]},
                    {
                        "id": 2,
                        "name": "webserver_host",
                        "type": [
                            "mezzanine_host",
                            "cloudify.types.host"
                        ]},
                    {
                        "id": 3,
                        "name": "postgres_host",
                        "type": [
                            "mezzanine_host",
                            "cloudify.types.host"
                        ]},
                    {
                        "id": 4,
                        "name": "nginx",
                        "type": [
                            "mezzanine_middleware",
                            "cloudify.types.middleware_server"
                        ]},
                    {
                        "id": 5,
                        "name": "unicorn",
                        "type": [
                            "mezzanine_middleware",
                            "cloudify.types.middleware_server"
                        ]},
                    {
                        "id": 9,
                        "name": "blah",
                        "type": [
                            "mezzanine_middleware",
                            "cloudify.types.middleware_server"
                        ]},
                    {
                        "id": 6,
                        "name": "postgres_server",
                        "type": [
                            "mezzanine_middleware",
                            "cloudify.types.middleware_server"
                        ]},
                    {
                        "id": 7,
                        "name": "mezzanine_db",
                        "type": [
                            "mezzanine_app_module",
                            "cloudify.types.app_module"
                        ]},
                    {
                        "id": 8,
                        "name": "mezzanine_app",
                        "type": [
                            "mezzanine_app_module",
                            "cloudify.types.app_module"
                        ]

                    }
                ],
                "edges": [
                    {
                        "source": 2,
                        "target": 1,
                        "type": "cloudify.relationships.contained_in"
                    },
                    {
                        "source": 3,
                        "target": 1,
                        "type": "cloudify.relationships.contained_in"
                    },
                    {
                        "source": 4,
                        "target": 5,
                        "type": "cloudify.relationships.connected_to"
                    },
                    {
                        "source": 4,
                        "target": 2,
                        "type": "cloudify.relationships.contained_in"
                    },
                    {
                        "source": 5,
                        "target": 2,
                        "type": "cloudify.relationships.contained_in"
                    },
                    {
                        "source": 6,
                        "target": 3,
                        "type": "cloudify.relationships.contained_in"
                    },
                    {
                        "source": 7,
                        "target": 6,
                        "type": "cloudify.relationships.contained_in"
                    },
                    {
                        "source": 8,
                        "target": 5,
                        "type": "cloudify.relationships.contained_in"
                    },
                    {
                        "source": 9,
                        "target": 2,
                        "type": "cloudify.relationships.contained_in"
                    },
                    {
                        "source": 8,
                        "target": 4,
                        "type": "cloudify.relationships.depends_on"
                    },
                    {
                        "source": 8,
                        "target": 7,
                        "type": "cloudify.relationships.connected_to"
                    }
                ]

            }


            ,tree: {
                'id': 'root',
                'children': [
                    {
                        'id': 0,
                        'type': ['cloudify.types.network'],
                        'dependencies': [3],
                        'children': [
                            {
                                'id': 2,
                                'type': ['cloudify.types.tier'],
                                'children': [
                                    {
                                        'id': 3,
                                        'type': ['cloudify.types.host'],
                                        'children': [
                                            {
                                                'id': 4,
                                                'type': ['cloudify.types.web_server', 'cloudify.types.middleware_server'],
                                                'children': [
                                                    {
                                                        'id': 5,
                                                        'type': ['cloudify.types.app_module']
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                'id': 1,
                                'type': ['cloudify.types.tier'],
                                'dependencies': [4, 5]
                            }
                        ]
                    }
                ]
            }
        };

        $scope.currData = function () {
            return $filter('json')($scope.data.graph);
        };

        $scope.code = {
            data: $scope.currData(),
            initial: $scope.currData()
        };

        $scope.codeDataAsObject = function () {
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
        $scope.events = {
            'actionClick': function (v) {
                console.log('action clicked: ', v)
            }
        };

    }]);
