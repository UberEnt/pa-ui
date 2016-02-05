// !LOCNS:galactic_war
define([
    'main/game/galactic_war/shared/js/systems/planets'
    ], function (examplePlanetList) {
    return [
        {
            Players: [0, 2],
            Systems: [
                { // Do this
                    Planets: [
                        {
                            fromRandomList: examplePlanetList,
                            mass: 50000,
                            position: [-25000, 0],
                            velocity: [0, 142]
                        }
                    ]
                },
                { // Do this
                    Planets: [
                        {
                            fromRandomList: examplePlanetList,
                            mass: 50000,
                            position: [-25000, 0],
                            velocity: [0, 142]
                        }
                    ]
                },
                {
                    Planets: [
                        {
                            starting_planet: true,
                            mass: 50000,
                            Thrust: [0, 0],
                            Radius: [450, 550],
                            Height: [20, 25],
                            Water: [33, 35],
                            Temp: [0, 100],
                            MetalDensity: [50, 75],
                            MetalClusters: [0, 49],
                            BiomeScale: [100, 100],
                            Position: [50000, 0],
                            Velocity: [0, 100],
                            Biomes: ['earth', 'desert', 'tropical', 'lava', 'moon', 'metal']
                        }
                    ]
                }
            ]
        },
        {
            Players: [3, 40],
            Systems: [
                {
                    Planets: [
                        {
                            fromRandomList: examplePlanetList,
                            mass: 50000,
                            position: [-25000, 0],
                            velocity: [0, 142]
                        }
                    ]
                },
                {
                    Planets: [
                        {
                            starting_planet: true,
                            mass: 50000,
                            Thrust: [0, 0],
                            Radius: [400, 550],
                            Height: [20, 25],
                            Water: [33, 35],
                            Temp: [0, 100],
                            MetalDensity: [40, 65],
                            MetalClusters: [0, 49],
                            BiomeScale: [100, 100],
                            Position: [-15000, 0],
                            Velocity: [0, 244],
                            Biomes: ['earth', 'desert', 'tropical', 'lava', 'metal', 'moon']
                        }
                    ]
                },
                {
                    Planets: [
                        {
                            fromRandomList: examplePlanetList,
                            mass: 50000,
                            position: [-25000, 0],
                            velocity: [0, 142]
                        },
                        {
                            starting_planet: false,
                            mass: 5000,
                            Thrust: [1, 2],
                            Radius: [250, 300],
                            Height: [0, 10],
                            Water: [1, 2],
                            Temp: [0, 100],
                            MetalDensity: [5, 15],
                            MetalClusters: [0, 24],
                            BiomeScale: [100, 100],
                            Position: [-22000, 0],
                            Velocity: [0, 430],
                            Biomes: ['lava', 'moon']
                        }
                    ]
                },
                {
                    Planets: [
                        {
                            starting_planet: true,
                            mass: 50000,
                            Thrust: [0, 0],
                            Radius: [500, 600],
                            Height: [20, 25],
                            Water: [33, 35],
                            Temp: [0, 100],
                            MetalDensity: [40, 65],
                            MetalClusters: [0, 49],
                            BiomeScale: [100, 100],
                            Position: [50000, 0],
                            Velocity: [0, 100],
                            Biomes: ['earth', 'desert', 'tropical', 'lava', 'moon', 'metal']
                        },
                        {
                            starting_planet: false,
                            mass: 5000,
                            Thrust: [1, 3],
                            Radius: [200, 250],
                            Height: [0, 10],
                            Water: [1, 2],
                            Temp: [0, 100],
                            MetalDensity: [40, 65],
                            MetalClusters: [0, 25],
                            BiomeScale: [100, 100],
                            Position: [60000, 0],
                            Velocity: [0, -58.1138],
                            Biomes: ['lava', 'moon']
                        }
                    ]
                },
                {
                    Planets: [
                        {
                            fromRandomList: examplePlanetList,
                            mass: 50000,
                            position: [-25000, 0],
                            velocity: [0, 142]
                        },
                        {
                            starting_planet: false,
                            mass: 50000,
                            Thrust: [0, 0],
                            Radius: [500, 500],
                            Height: [0, 5],
                            Water: [1, 5],
                            Temp: [0, 100],
                            MetalDensity: [50, 100],
                            MetalClusters: [100, 100],
                            BiomeScale: [100, 100],
                            Position: [0, -100000],
                            Velocity: [70.7107, 0.00000309086],
                            Biomes: ['metal']
                        }
                    ]
                },
                {
                    Planets: [
                        {
                            starting_planet: true,
                            mass: 50000,
                            Thrust: [0, 0],
                            Radius: [600, 600],
                            Height: [20, 25],
                            Water: [33, 35],
                            Temp: [0, 100],
                            MetalDensity: [40, 65],
                            MetalClusters: [25, 25],
                            BiomeScale: [100, 100],
                            Position: [50000, 0],
                            Velocity: [-0.00000437114, 100],
                            Biomes: ['desert', 'lava']
                        },
                        {
                            starting_planet: false,
                            mass: 50000,
                            Thrust: [0, 0],
                            Radius: [500, 500],
                            Height: [0, 5],
                            Water: [1, 5],
                            Temp: [0, 100],
                            MetalDensity: [50, 100],
                            MetalClusters: [100, 100],
                            BiomeScale: [100, 100],
                            Position: [0, -100000],
                            Velocity: [70.7107, 0.00000309086],
                            Biomes: ['metal']
                        }
                    ]
                },
                {
                    Planets: [
                       {
                           starting_planet: false,
                           mass: 50000,
                           Thrust: [0, 0],
                           Radius: [1500, 1500],
                           Height: [0, 0],
                           Water: [0, 0],
                           Temp: [0, 100],
                           MetalDensity: [0, 0],
                           MetalClusters: [0, 0],
                           BiomeScale: [0, 0],
                           Position: [30000, 0],
                           Velocity: [0, 129.0994],
                           Biomes: ['gas']
                       },
                       {
                            fromRandomList: examplePlanetList,
                            mass: 10000,
                            position: [35000, 0],
                            velocity: [0, -94.5074],
                        },
                       {
                           starting_planet: true,
                           mass: 10000,
                           Thrust: [0, 0],
                           Radius: [450, 550],
                           Height: [10, 25],
                           Water: [0, 40],
                           Temp: [0, 100],
                           MetalDensity: [40, 65],
                           MetalClusters: [0, 49],
                           BiomeScale: [0, 100],
                           Position: [25000, 0],
                           Velocity: [0, 352.7061],
                           Biomes: ['earth', 'lava', 'desert', 'tropical']
                       }
                    ]
                }
            ]
        },
        {
            Players: [0, 0],
            Systems: [
                {
                    Planets: [
                        {
                            starting_planet: true,
                            mass: 50000,
                            Thrust: [0, 0],
                            Radius: [700, 900],
                            Height: [20, 25],
                            Water: [33, 35],
                            Temp: [0, 100],
                            MetalDensity: [75, 100],
                            MetalClusters: [75, 100],
                            BiomeScale: [100, 100],
                            Position: [-15000, 0],
                            Velocity: [0, 244],
                            Biomes: ['earth', 'desert', 'tropical', 'lava', 'metal', 'moon']
                        }
                    ]
                },
                {
                    Planets: [
                        {
                            starting_planet: true,
                            mass: 50000,
                            Thrust: [0, 0],
                            Radius: [800, 1000],
                            Height: [20, 25],
                            Water: [33, 35],
                            Temp: [0, 100],
                            MetalDensity: [40, 65],
                            MetalClusters: [0, 49],
                            BiomeScale: [100, 100],
                            Position: [50000, 0],
                            Velocity: [0, 100],
                            Biomes: ['earth', 'desert', 'tropical', 'lava', 'moon', 'metal']
                        },
                        {
                            starting_planet: false,
                            mass: 5000,
                            Thrust: [1, 3],
                            Radius: [200, 250],
                            Height: [0, 10],
                            Water: [1, 2],
                            Temp: [0, 100],
                            MetalDensity: [40, 65],
                            MetalClusters: [0, 25],
                            BiomeScale: [100, 100],
                            Position: [60000, 0],
                            Velocity: [0, -58.1138],
                            Biomes: ['lava', 'moon']
                        }
                    ]
                },
                {
                    Planets: [
                        {
                            starting_planet: true,
                            mass: 50000,
                            Thrust: [0, 0],
                            Radius: [550, 600],
                            Height: [20, 25],
                            Water: [33, 35],
                            Temp: [0, 100],
                            MetalDensity: [40, 65],
                            MetalClusters: [0, 49],
                            BiomeScale: [100, 100],
                            Position: [50000, 0],
                            Velocity: [0, 100],
                            Biomes: ['earth', 'desert', 'tropical', 'lava', 'moon', 'metal']
                        },
                        {
                            starting_planet: false,
                            mass: 5000,
                            Thrust: [1, 3],
                            Radius: [200, 250],
                            Height: [0, 10],
                            Water: [1, 2],
                            Temp: [0, 100],
                            MetalDensity: [40, 65],
                            MetalClusters: [0, 25],
                            BiomeScale: [100, 100],
                            Position: [60000, 0],
                            Velocity: [0, -58.1138],
                            Biomes: ['lava', 'moon']
                        },
                        {
                            starting_planet: false,
                            mass: 50000,
                            Thrust: [0, 0],
                            Radius: [1500, 1500],
                            Height: [0, 0],
                            Water: [0, 0],
                            Temp: [0, 100],
                            MetalDensity: [0, 0],
                            MetalClusters: [0, 0],
                            BiomeScale: [100, 100],
                            Position: [-25000, 0],
                            Velocity: [0, -141.4213],
                            Biomes: ['gas']
                        },
                    ]
                },
                {
                    Planets: [
                        {
                            starting_planet: true,
                            mass: 50000,
                            Thrust: [0, 0],
                            Radius: [400, 400],
                            Height: [20, 25],
                            Water: [30, 40],
                            Temp: [0, 100],
                            MetalDensity: [0, 10],
                            MetalClusters: [25, 25],
                            BiomeScale: [100, 100],
                            Position: [25000, 0],
                            Velocity: [0.00000618172, -141.421],
                            Biomes: ['earth', 'desert', 'lava']
                        },
                        {
                            starting_planet: true,
                            mass: 50000,
                            Thrust: [0, 0],
                            Radius: [400, 400],
                            Height: [20, 25],
                            Water: [30, 40],
                            Temp: [0, 100],
                            MetalDensity: [0, 10],
                            MetalClusters: [25, 25],
                            BiomeScale: [100, 100],
                            Position: [12500, -21700],
                            Velocity: [-122.439, -70.5296],
                            Biomes: ['earth', 'desert', 'lava']
                        },
                        {
                            starting_planet: true,
                            mass: 50000,
                            Thrust: [0, 0],
                            Radius: [400, 400],
                            Height: [20, 25],
                            Water: [30, 40],
                            Temp: [0, 100],
                            MetalDensity: [0, 10],
                            MetalClusters: [25, 25],
                            BiomeScale: [100, 100],
                            Position: [-12500, -21700],
                            Velocity: [-122.439, 70.5296],
                            Biomes: ['earth', 'desert', 'lava']
                        },
                        {
                            starting_planet: true,
                            mass: 50000,
                            Thrust: [0, 0],
                            Radius: [400, 400],
                            Height: [20, 25],
                            Water: [30, 40],
                            Temp: [0, 100],
                            MetalDensity: [0, 10],
                            MetalClusters: [25, 25],
                            BiomeScale: [100, 100],
                            Position: [-25000, 0],
                            Velocity: [-0.00000618172, 141.421],
                            Biomes: ['earth', 'desert', 'lava']
                        },
                        {
                            starting_planet: true,
                            mass: 50000,
                            Thrust: [0, 0],
                            Radius: [400, 400],
                            Height: [20, 25],
                            Water: [30, 40],
                            Temp: [0, 100],
                            MetalDensity: [0, 10],
                            MetalClusters: [25, 25],
                            BiomeScale: [100, 100],
                            Position: [-12500, 21700],
                            Velocity: [122.439, 70.5297],
                            Biomes: ['earth', 'desert', 'lava']
                        },
                        {
                            starting_planet: true,
                            mass: 50000,
                            Thrust: [0, 0],
                            Radius: [400, 400],
                            Height: [20, 25],
                            Water: [30, 40],
                            Temp: [0, 100],
                            MetalDensity: [0, 10],
                            MetalClusters: [25, 25],
                            BiomeScale: [100, 100],
                            Position: [12500, 21700],
                            Velocity: [122.439, -70.5297],
                            Biomes: ['earth', 'desert', 'lava']
                        },
                        {
                            starting_planet: false,
                            mass: 50000,
                            Thrust: [0, 0],
                            Radius: [500, 600],
                            Height: [0, 1],
                            Water: [0, 1],
                            Temp: [0, 100],
                            MetalDensity: [0, 10],
                            MetalClusters: [25, 50],
                            BiomeScale: [100, 100],
                            Position: [50000, 0],
                            Velocity: [-0.00000437114, 100],
                            Biomes: ['metal']
                        },
                        {
                            starting_planet: false,
                            mass: 5000,
                            Thrust: [1, 3],
                            Radius: [200, 250],
                            Height: [0, 1],
                            Water: [0, 1],
                            Temp: [0, 100],
                            MetalDensity: [0, 10],
                            MetalClusters: [0, 0],
                            BiomeScale: [100, 100],
                            Position: [55000, 0],
                            Velocity: [-0.000200886, 323.607],
                            Biomes: ['moon', 'lava']
                        },
                        {
                            starting_planet: false,
                            mass: 5000,
                            Thrust: [1, 3],
                            Radius: [200, 250],
                            Height: [0, 1],
                            Water: [0, 1],
                            Temp: [0, 100],
                            MetalDensity: [0, 10],
                            MetalClusters: [0, 0],
                            BiomeScale: [100, 100],
                            Position: [45000, 0],
                            Velocity: [-0.000181338, -123.607],
                            Biomes: ['moon', 'lava']
                        }
                    ]
                },
                {
                    Planets: [
                        {
                            starting_planet: false,
                            mass: 50000,
                            Thrust: [0, 0],
                            Radius: [250, 250],
                            Height: [0, 0],
                            Water: [30, 40],
                            Temp: [0, 100],
                            MetalDensity: [100, 100],
                            MetalClusters: [100, 100],
                            BiomeScale: [100, 100],
                            Position: [25000, 0],
                            Velocity: [0.00000618172, -141.421],
                            Biomes: ['moon', 'lava']
                        },
                        {
                            starting_planet: true,
                            mass: 10000,
                            Thrust: [0, 0],
                            Radius: [600, 600],
                            Height: [20, 25],
                            Water: [30, 40],
                            Temp: [0, 100],
                            MetalDensity: [0, 10],
                            MetalClusters: [25, 25],
                            BiomeScale: [100, 100],
                            Position: [25000, 5000],
                            Velocity: [223.607, -141.421],
                            Biomes: ['earth', 'desert', 'lava']
                        },
                        {
                            starting_planet: true,
                            mass: 10000,
                            Thrust: [0, 0],
                            Radius: [600, 600],
                            Height: [20, 25],
                            Water: [30, 40],
                            Temp: [0, 100],
                            MetalDensity: [0, 10],
                            MetalClusters: [25, 25],
                            BiomeScale: [100, 100],
                            Position: [29300, -2500],
                            Velocity: [-112.683, -335.237],
                            Biomes: ['earth', 'desert', 'lava']
                        },
                        {
                            starting_planet: true,
                            mass: 10000,
                            Thrust: [0, 0],
                            Radius: [600, 600],
                            Height: [20, 25],
                            Water: [30, 40],
                            Temp: [0, 100],
                            MetalDensity: [0, 10],
                            MetalClusters: [25, 25],
                            BiomeScale: [100, 100],
                            Position: [20700, -2500],
                            Velocity: [-112.683, 52.3943],
                            Biomes: ['earth', 'desert', 'lava']
                        },
                        {
                            starting_planet: false,
                            mass: 5000,
                            Thrust: [1, 3],
                            Radius: [200, 250],
                            Height: [0, 25],
                            Water: [0, 1],
                            Temp: [0, 100],
                            MetalDensity: [40, 65],
                            MetalClusters: [0, 25],
                            BiomeScale: [100, 100],
                            Position: [0, -50000],
                            Velocity: [100, 0.00000437114],
                            Biomes: ['moon']
                        },
                        {
                            starting_planet: false,
                            mass: 5000,
                            Thrust: [1, 3],
                            Radius: [200, 250],
                            Height: [0, 25],
                            Water: [0, 1],
                            Temp: [0, 100],
                            MetalDensity: [40, 65],
                            MetalClusters: [0, 25],
                            BiomeScale: [100, 100],
                            Position: [-43300, 25000],
                            Velocity: [-50.0017, -86.6029],
                            Biomes: ['moon']
                        },
                        {
                            starting_planet: false,
                            mass: 5000,
                            Thrust: [1, 3],
                            Radius: [200, 250],
                            Height: [0, 25],
                            Water: [0, 1],
                            Temp: [0, 100],
                            MetalDensity: [40, 65],
                            MetalClusters: [0, 25],
                            BiomeScale: [100, 100],
                            Position: [43300, 25000],
                            Velocity: [-50.0017, 86.6029],
                            Biomes: ['moon']
                        },
                    ]
                },
                {
                    Planets: [
                       {
                           starting_planet: false,
                           mass: 50000,
                           Thrust: [0, 0],
                           Radius: [1500, 1500],
                           Height: [0, 0],
                           Water: [0, 0],
                           Temp: [0, 100],
                           MetalDensity: [0, 0],
                           MetalClusters: [0, 0],
                           BiomeScale: [0, 0],
                           Position: [30000, 0],
                           Velocity: [0, 129.0994],
                           Biomes: ['gas']
                       },
                       {
                           starting_planet: true,
                           mass: 10000,
                           Thrust: [0, 0],
                           Radius: [450, 550],
                           Height: [10, 25],
                           Water: [0, 45],
                           Temp: [0, 100],
                           MetalDensity: [40, 65],
                           MetalClusters: [0, 49],
                           BiomeScale: [0, 100],
                           Position: [35000, 0],
                           Velocity: [0, -94.5074],
                           Biomes: ['earth', 'lava', 'desert', 'tropical']
                       },
                       {
                           starting_planet: true,
                           mass: 10000,
                           Thrust: [0, 0],
                           Radius: [450, 550],
                           Height: [10, 25],
                           Water: [0, 40],
                           Temp: [0, 100],
                           MetalDensity: [40, 65],
                           MetalClusters: [0, 49],
                           BiomeScale: [0, 100],
                           Position: [25000, 0],
                           Velocity: [0, 352.7061],
                           Biomes: ['earth', 'lava', 'desert', 'tropical']
                       },
                       {
                           starting_planet: true,
                           mass: 5000,
                           Thrust: [1, 3],
                           Radius: [200, 250],
                           Height: [0, 10],
                           Water: [0, 0],
                           Temp: [0, 0],
                           MetalDensity: [10, 20],
                           MetalClusters: [0, 49],
                           BiomeScale: [0, 100],
                           Position: [20000, 0],
                           Velocity: [0, 287.213287],
                           Biomes: ['moon', 'lava']
                       },
                       {
                           starting_planet: false,
                           mass: 50000,
                           Thrust: [0, 0],
                           Radius: [500, 525],
                           Height: [0, 0],
                           Water: [0, 0],
                           Temp: [0, 100],
                           MetalDensity: [50, 100],
                           MetalClusters: [50, 100],
                           BiomeScale: [0, 100],
                           Position: [14000, 0],
                           Velocity: [0, 188.98223],
                           Biomes: ['metal']
                       }
                    ]
                }
            ]
        },
        {
            Players: [0, 0],
            Systems: [
                {
                    Planets: [
                        {
                            starting_planet: true,
                            mass: 50000,
                            Thrust: [0, 0],
                            Radius: [900, 1200],
                            Height: [20, 25],
                            Water: [33, 35],
                            Temp: [0, 100],
                            MetalDensity: [40, 65],
                            MetalClusters: [0, 25],
                            BiomeScale: [100, 100],
                            Position: [-15000, 0],
                            Velocity: [0, 244],
                            Biomes: ['earth', 'desert', 'lava', 'metal', 'moon']
                        }
                    ]
                },
                {
                    Planets: [
                        {
                            starting_planet: true,
                            mass: 50000,
                            Thrust: [0, 0],
                            Radius: [900, 1000],
                            Height: [20, 25],
                            Water: [33, 35],
                            Temp: [0, 100],
                            MetalDensity: [40, 65],
                            MetalClusters: [0, 49],
                            BiomeScale: [100, 100],
                            Position: [50000, 0],
                            Velocity: [0, 100],
                            Biomes: ['earth', 'desert', 'tropical', 'lava', 'moon', 'metal']
                        },
                        {
                            starting_planet: false,
                            mass: 5000,
                            Thrust: [1, 3],
                            Radius: [200, 250],
                            Height: [0, 10],
                            Water: [1, 2],
                            Temp: [0, 100],
                            MetalDensity: [40, 65],
                            MetalClusters: [0, 25],
                            BiomeScale: [100, 100],
                            Position: [60000, 0],
                            Velocity: [0, -58.1138],
                            Biomes: ['lava', 'moon']
                        }
                    ]
                },
                {
                    Planets: [
                        {
                            starting_planet: true,
                            mass: 50000,
                            Thrust: [0, 0],
                            Radius: [800, 1000],
                            Height: [20, 25],
                            Water: [33, 35],
                            Temp: [0, 100],
                            MetalDensity: [40, 65],
                            MetalClusters: [0, 49],
                            BiomeScale: [100, 100],
                            Position: [50000, 0],
                            Velocity: [0, 100],
                            Biomes: ['earth', 'desert', 'tropical', 'lava', 'moon', 'metal']
                        },
                        {
                            starting_planet: false,
                            mass: 5000,
                            Thrust: [1, 3],
                            Radius: [200, 250],
                            Height: [0, 10],
                            Water: [1, 2],
                            Temp: [0, 100],
                            MetalDensity: [40, 65],
                            MetalClusters: [0, 25],
                            BiomeScale: [100, 100],
                            Position: [60000, 0],
                            Velocity: [0, -58.1138],
                            Biomes: ['lava', 'moon']
                        },
                        {
                            starting_planet: false,
                            mass: 50000,
                            Thrust: [0, 0],
                            Radius: [1500, 1500],
                            Height: [0, 0],
                            Water: [0, 0],
                            Temp: [0, 100],
                            MetalDensity: [0, 0],
                            MetalClusters: [0, 0],
                            BiomeScale: [100, 100],
                            Position: [-25000, 0],
                            Velocity: [0, -141.4213],
                            Biomes: ['gas']
                        },
                    ]
                },
                {
                    Planets: [
                        {
                            starting_planet: true,
                            mass: 50000,
                            Thrust: [0, 0],
                            Radius: [900, 1000],
                            Height: [20, 25],
                            Water: [33, 35],
                            Temp: [0, 100],
                            MetalDensity: [40, 65],
                            MetalClusters: [25, 50],
                            BiomeScale: [100, 100],
                            Position: [0, 25000],
                            Velocity: [-141.421, -0.00000618172],
                            Biomes: ['earth', 'desert', 'lava', 'moon', 'metal']
                        },
                        {
                            starting_planet: false,
                            mass: 5000,
                            Thrust: [1, 3],
                            Radius: [200, 250],
                            Height: [0, 10],
                            Water: [1, 2],
                            Temp: [0, 100],
                            MetalDensity: [10, 20],
                            MetalClusters: [0, 49],
                            BiomeScale: [100, 100],
                            Position: [50000, 0],
                            Velocity: [-0.00000437114, 100],
                            Biomes: ['moon']
                        },
                        {
                            starting_planet: false,
                            mass: 5000,
                            Thrust: [1, 3],
                            Radius: [200, 250],
                            Height: [0, 10],
                            Water: [1, 2],
                            Temp: [0, 100],
                            MetalDensity: [10, 20],
                            MetalClusters: [0, 49],
                            BiomeScale: [100, 100],
                            Position: [35400, -35400],
                            Velocity: [70.6661, 70.6661],
                            Biomes: ['moon']
                        },
                        {
                            starting_planet: false,
                            mass: 5000,
                            Thrust: [1, 3],
                            Radius: [200, 250],
                            Height: [0, 10],
                            Water: [1, 2],
                            Temp: [0, 100],
                            MetalDensity: [10, 20],
                            MetalClusters: [0, 49],
                            BiomeScale: [100, 100],
                            Position: [0, -50000],
                            Velocity: [100, 0.00000437114],
                            Biomes: ['moon']
                        },
                        {
                            starting_planet: false,
                            mass: 5000,
                            Thrust: [1, 3],
                            Radius: [200, 250],
                            Height: [0, 10],
                            Water: [1, 2],
                            Temp: [0, 100],
                            MetalDensity: [10, 20],
                            MetalClusters: [0, 49],
                            BiomeScale: [100, 100],
                            Position: [-35400, -35400],
                            Velocity: [70.6661, -70.6661],
                            Biomes: ['moon']
                        },
                        {
                            starting_planet: false,
                            mass: 5000,
                            Thrust: [1, 3],
                            Radius: [200, 250],
                            Height: [0, 10],
                            Water: [1, 2],
                            Temp: [0, 100],
                            MetalDensity: [10, 20],
                            MetalClusters: [0, 49],
                            BiomeScale: [100, 100],
                            Position: [-50000, 0],
                            Velocity: [0.00000437114, -100],
                            Biomes: ['moon']
                        },
                        {
                            starting_planet: false,
                            mass: 5000,
                            Thrust: [1, 3],
                            Radius: [200, 250],
                            Height: [0, 10],
                            Water: [1, 2],
                            Temp: [0, 100],
                            MetalDensity: [10, 20],
                            MetalClusters: [0, 49],
                            BiomeScale: [100, 100],
                            Position: [-35400, 35400],
                            Velocity: [-70.6661, -70.6661],
                            Biomes: ['moon']
                        },
                        {
                            starting_planet: false,
                            mass: 5000,
                            Thrust: [1, 3],
                            Radius: [200, 250],
                            Height: [0, 10],
                            Water: [1, 2],
                            Temp: [0, 100],
                            MetalDensity: [10, 20],
                            MetalClusters: [0, 49],
                            BiomeScale: [100, 100],
                            Position: [0, 50000],
                            Velocity: [-100, -0.00000437114],
                            Biomes: ['moon']
                        },
                        {
                            starting_planet: false,
                            mass: 5000,
                            Thrust: [1, 3],
                            Radius: [200, 250],
                            Height: [0, 10],
                            Water: [1, 2],
                            Temp: [0, 100],
                            MetalDensity: [10, 20],
                            MetalClusters: [0, 49],
                            BiomeScale: [100, 100],
                            Position: [35400, 35400],
                            Velocity: [-70.6661, 70.6661],
                            Biomes: ['moon']
                        },
                    ]
                },
                {
                    Planets: [
                        {
                            starting_planet: true,
                            mass: 50000,
                            Thrust: [0, 0],
                            Radius: [900, 1000],
                            Height: [20, 25],
                            Water: [33, 35],
                            Temp: [0, 100],
                            MetalDensity: [40, 65],
                            MetalClusters: [25, 50],
                            BiomeScale: [100, 100],
                            Position: [0, 25000],
                            Velocity: [-141.421, -0.00000618172],
                            Biomes: ['earth', 'desert', 'lava', 'moon', 'metal']
                        },
                        {
                            starting_planet: true,
                            mass: 50000,
                            Thrust: [0, 0],
                            Radius: [900, 1000],
                            Height: [20, 25],
                            Water: [33, 35],
                            Temp: [0, 100],
                            MetalDensity: [40, 65],
                            MetalClusters: [25, 50],
                            BiomeScale: [100, 100],
                            Position: [0, -25000],
                            Velocity: [141.421, 0.00000618172],
                            Biomes: ['earth', 'desert', 'lava', 'moon', 'metal']
                        },
                        {
                            starting_planet: false,
                            mass: 5000,
                            Thrust: [1, 3],
                            Radius: [200, 250],
                            Height: [0, 10],
                            Water: [1, 2],
                            Temp: [0, 100],
                            MetalDensity: [10, 20],
                            MetalClusters: [0, 49],
                            BiomeScale: [100, 100],
                            Position: [50000, 0],
                            Velocity: [-0.00000437114, 100],
                            Biomes: ['moon']
                        },
                        {
                            starting_planet: false,
                            mass: 5000,
                            Thrust: [1, 3],
                            Radius: [200, 250],
                            Height: [0, 10],
                            Water: [1, 2],
                            Temp: [0, 100],
                            MetalDensity: [10, 20],
                            MetalClusters: [0, 49],
                            BiomeScale: [100, 100],
                            Position: [-50000, 0],
                            Velocity: [0.00000437114, -100],
                            Biomes: ['moon']
                        },
                    ]
                },
                {
                    Planets: [
                        {
                            starting_planet: false,
                            mass: 50000,
                            Thrust: [0, 0],
                            Radius: [250, 250],
                            Height: [0, 0],
                            Water: [30, 40],
                            Temp: [0, 100],
                            MetalDensity: [100, 100],
                            MetalClusters: [100, 100],
                            BiomeScale: [100, 100],
                            Position: [25000, 0],
                            Velocity: [0.00000618172, -141.421],
                            Biomes: ['moon', 'lava']
                        },
                        {
                            starting_planet: true,
                            mass: 10000,
                            Thrust: [0, 0],
                            Radius: [600, 600],
                            Height: [20, 25],
                            Water: [30, 40],
                            Temp: [0, 100],
                            MetalDensity: [0, 10],
                            MetalClusters: [25, 25],
                            BiomeScale: [100, 100],
                            Position: [25000, 5000],
                            Velocity: [223.607, -141.421],
                            Biomes: ['earth', 'desert', 'lava']
                        },
                        {
                            starting_planet: true,
                            mass: 10000,
                            Thrust: [0, 0],
                            Radius: [600, 600],
                            Height: [20, 25],
                            Water: [30, 40],
                            Temp: [0, 100],
                            MetalDensity: [0, 10],
                            MetalClusters: [25, 25],
                            BiomeScale: [100, 100],
                            Position: [29300, -2500],
                            Velocity: [-112.683, -335.237],
                            Biomes: ['earth', 'desert', 'lava']
                        },
                        {
                            starting_planet: true,
                            mass: 10000,
                            Thrust: [0, 0],
                            Radius: [600, 600],
                            Height: [20, 25],
                            Water: [30, 40],
                            Temp: [0, 100],
                            MetalDensity: [0, 10],
                            MetalClusters: [25, 25],
                            BiomeScale: [100, 100],
                            Position: [20700, -2500],
                            Velocity: [-112.683, 52.3943],
                            Biomes: ['earth', 'desert', 'lava']
                        },
                        {
                            starting_planet: false,
                            mass: 5000,
                            Thrust: [1, 3],
                            Radius: [200, 250],
                            Height: [0, 25],
                            Water: [0, 1],
                            Temp: [0, 100],
                            MetalDensity: [40, 65],
                            MetalClusters: [0, 25],
                            BiomeScale: [100, 100],
                            Position: [0, -50000],
                            Velocity: [100, 0.00000437114],
                            Biomes: ['moon']
                        },
                        {
                            starting_planet: false,
                            mass: 5000,
                            Thrust: [1, 3],
                            Radius: [200, 250],
                            Height: [0, 25],
                            Water: [0, 1],
                            Temp: [0, 100],
                            MetalDensity: [40, 65],
                            MetalClusters: [0, 25],
                            BiomeScale: [100, 100],
                            Position: [-43300, 25000],
                            Velocity: [-50.0017, -86.6029],
                            Biomes: ['moon']
                        },
                        {
                            starting_planet: false,
                            mass: 5000,
                            Thrust: [1, 3],
                            Radius: [200, 250],
                            Height: [0, 25],
                            Water: [0, 1],
                            Temp: [0, 100],
                            MetalDensity: [40, 65],
                            MetalClusters: [0, 25],
                            BiomeScale: [100, 100],
                            Position: [43300, 25000],
                            Velocity: [-50.0017, 86.6029],
                            Biomes: ['moon']
                        },
                    ]
                }
            ]
        }
    ];

});

