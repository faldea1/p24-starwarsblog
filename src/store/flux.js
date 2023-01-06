//es donde consumimos nuestra API. Tenemos Store y las Acciones (provocan un cambio en store).
//1ero: definir un store.
//2do: definir acciones (una para "traer" listados y otro para manejar favorites). "Traer" implica hacer un "llamado" a la API de Star Wars. Para esto se realiza un fetch (URL, CONFIG.).
//llamado a API puede devolver muchas cosas. Filtrar sólo lo que necesito.
//Luego, desde la vista de los componentes puedo obtener listados especificos. Llamar a fetch y mostrar listado.

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
            favorites: [],
            peopleList: [],
            peopleForDetails: [
                {charcaption: 'Luke Skywalker',
                 birth_year: '19BBY',
                 eye_color: 'blue',
                 gender: 'male',
                 hair_color: 'blond',
                 height: '172',
                 mass: '77',
                 skin_color: 'fair',
                 charurl: 'https://starwars-visualguide.com/assets/img/characters/1.jpg',
                 charphrase: '"I am a Jedi, like my father before me."'
                },
                {charcaption: 'C-3PO',
                birth_year: '112BBY',
                eye_color: 'yellow',
                gender: 'n/a',
                hair_color: 'n/a',
                height: '167',
                mass: '75',
                skin_color: 'gold',
                charurl: 'https://starwars-visualguide.com/assets/img/characters/2.jpg',
                charphrase: '"I am C-3PO, human-cyborg relations."'
                },
                {charcaption: 'R2-D2',
                birth_year: '33BBY',
                eye_color: 'red',
                gender: 'n/a',
                hair_color: 'n/a',
                height: '96',
                mass: '32',
                skin_color: 'white, blue',
                charurl: 'https://starwars-visualguide.com/assets/img/characters/3.jpg',
                charphrase: '"An extremely well put-together little droid."'
                },
                {charcaption: 'Darth Vader',
                birth_year: '41.9BBY',
                eye_color: 'yellow',
                gender: 'male',
                hair_color: 'none',
                height: '202',
                mass: '136',
                skin_color: 'white',
                charurl: 'https://starwars-visualguide.com/assets/img/characters/4.jpg',
                charphrase: '“You dont know the power of the dark side!”'
                },
                {charcaption: 'Leia Organa',
                birth_year: '19BBY',
                eye_color: 'brown',
                gender: 'female',
                hair_color: 'brown',
                height: '150',
                mass: '49',
                skin_color: 'light',
                charurl: 'https://starwars-visualguide.com/assets/img/characters/5.jpg',
                charphrase: '"Hope is like the sun. If you only believe it when you see it you will never make it through the night."'
                },
                {charcaption: 'Owen Lars',
                birth_year: '52BBY',
                eye_color: 'blue',
                gender: 'male',
                hair_color: 'brown, grey',
                height: '178',
                mass: '120',
                skin_color: 'light',
                charurl: 'https://starwars-visualguide.com/assets/img/characters/6.jpg',
                charphrase: '"Owen is strong like his father: pragmatic and certain of his ways, grateful for simple joys..."'
                },
                {charcaption: 'Beru Whitesun lars',
                birth_year: '47BBY',
                eye_color: 'blue',
                gender: 'female',
                hair_color: 'brown',
                height: '165',
                mass: '75',
                skin_color: 'light',
                charurl: 'https://starwars-visualguide.com/assets/img/characters/7.jpg',
                charphrase: '"Victory!? There is no victory in war! War takes everything and gives nothing!"'
                },
                {charcaption: 'R5-D4',
                birth_year: 'unknown',
                eye_color: 'red',
                gender: 'n/a',
                hair_color: 'n/a',
                height: '97',
                mass: '32',
                skin_color: 'white, red',
                charurl: 'https://starwars-visualguide.com/assets/img/characters/8.jpg',
                charphrase: '"Thank you, friend. You may have saved the galaxy today. I will never forget you."'
                },
                {charcaption: 'Biggs Darklighter',
                birth_year: '24BBY',
                eye_color: 'brown',
                gender: 'male',
                hair_color: 'black',
                height: '183',
                mass: '84',
                skin_color: 'light',
                charurl: 'https://starwars-visualguide.com/assets/img/characters/9.jpg',
                charphrase: '"It will be like old times, Luke. They will never stop us."'
                },
                {charcaption: 'Obi-Wan Kenobi',
                birth_year: '57BBY',
                eye_color: 'blue-gray',
                gender: 'male',
                hair_color: 'auburn, white',
                height: '182',
                mass: '77',
                skin_color: 'fair',
                charurl: 'https://starwars-visualguide.com/assets/img/characters/10.jpg',
                charphrase: '"In my experience, there is no such thing as luck."'
                }
            ],
            favoritespla: [],
            planetsList: [],
            planetsForDetails: [
                {placaption: 'Tatooine',
                climate: 'arid',
                terrain: 'desert',
                population: '200000',
                surface_water: '1',
                diameter: '10465',
                orbital_period: '304',
                rotation_period: '23',
                gravity: '1 standard',
                plaurl: 'https://starwars-visualguide.com/assets/img/planets/16.jpg',
                plaphrase: '"If there is a true center of the universe, you are now on the planet furthest from it."'
                },
                {placaption: 'Alderaan',
                climate: 'temperate',
                terrain: 'grasslands, mountains',
                population: '2000000000',
                surface_water: '40',
                diameter: '12500',
                orbital_period: '364',
                rotation_period: '24',
                gravity: '1 standard',
                plaurl: 'https://starwars-visualguide.com/assets/img/planets/2.jpg',
                plaphrase: '"To some degree, Alderaan has always been the soul of the Republic."'
                },
                {placaption: 'Yavin IV',
                climate: 'temperate, tropical',
                terrain: 'jungle, rainforests',
                population: '1000',
                surface_water: '8',
                diameter: '10200',
                orbital_period: '4818',
                rotation_period: '24',
                gravity: '1 standard',
                plaurl: 'https://starwars-visualguide.com/assets/img/planets/3.jpg',
                plaphrase: '"Great events happened here on Yavin 4...you can get a true sense of history."'
                },
                {placaption: 'Hoth',
                climate: 'frozen',
                terrain: 'tundra, ice caves, mountain ranges',
                population: 'unknown',
                surface_water: '100',
                diameter: '7200',
                orbital_period: '549',
                rotation_period: '23',
                gravity: '1.1 standard',
                plaurl: 'https://starwars-visualguide.com/assets/img/planets/4.jpg',
                plaphrase: '"There is not enough life in this ice cube to fill a space cruiser!'
                },
                {placaption: 'Dagobah',
                Climate: 'murky',
                terrain: 'swamp, jungles',
                population: 'unknown',
                surface_water: '8',
                diameter: '8900',
                orbital_period: '341',
                rotation_period: '23',
                gravity: 'N/A',
                plaurl: 'https://starwars-visualguide.com/assets/img/planets/5.jpg',
                plaphrase: '"I am not gonna change my mind about this... There is something alive down there."'
                },
                {placaption: 'Bespin',
                climate: 'temperate',
                terrain: 'gas giant',
                population: '6000000',
                surface_water: '0',
                diameter: '118000',
                orbital_period: '5110',
                rotation_period: '12',
                gravity: '1.5 (surface), 1 standard (Cloud City)',
                plaurl: 'https://starwars-visualguide.com/assets/img/planets/6.jpg',
                plaphrase: '"Bespin is very far but we can get there."'
                },
                {placaption: 'Endor',
                climate: 'temperate',
                terrain: 'forests, mountains, lakes',
                population: '30000000',
                surface_water: '8',
                diameter: '4900',
                orbital_period: '402',
                rotation_period: '18',
                gravity: '0.85 standard',
                plaurl: 'https://starwars-visualguide.com/assets/img/planets/7.jpg',
                plaphrase: '"The home is beautiful. There are few mountains and endless trees."'
                },
                {placaption: 'Naboo',
                climate: 'temperate',
                terrain: 'grassy hills, swamps, forests, mountains',
                population: '4500000000',
                surface_water: '12',
                diameter: '12120',
                orbital_period: '312',
                rotation_period: '26',
                gravity: '1 standard',
                plaurl: 'https://starwars-visualguide.com/assets/img/planets/8.jpg',
                plaphrase: '"Naboo represents the best of the Old Republic."'
                },
                {placaption: 'Coruscant',
                climate: 'temperate',
                terrain: 'cityscape, mountains',
                population: '1000000000000',
                surface_water: 'unknown',
                diameter: '12240',
                orbital_period: '368',
                rotation_period: '24',
                gravity: '1 standard',
                plaurl: 'https://starwars-visualguide.com/assets/img/planets/9.jpg',
                plaphrase: '"... Capital of the Republic, an entire planet became a single city."'
                },
                {placaption: 'Kamino',
                climate: 'temperate',
                terrain: 'ocean',
                population: '1000000000',
                surface_water: '100',
                diameter: '19720',
                orbital_period: '463',
                rotation_period: '27',
                gravity: '1 standard',
                plaurl: 'https://starwars-visualguide.com/assets/img/planets/10.jpg',
                plaphrase: '"There is R4. Right where it should be. Our lost planet... Kamino."'
                }
            ]
		},
		actions: {
            fetchPeople: async () => {

                const URL = "https://swapi.dev/api/people/";
                const CONFIG = {
                    method: "GET",
                    headers:{
                        "Content-type": "application/json"
                    }
                };
                const response = await fetch(URL, CONFIG);
                const json = await response.json();
                
                console.log(">>DATA>>", json);
                setStore({ peopleList: json.results });
            },
            setFavorites: (name) => {
                const {favorites} = getStore();
                setStore({ favorites: [...favorites, name] })
            },
            fetchPlanets: async () => {

                const URL2= "https://swapi.dev/api/planets/";
                const CONFIG2 = {
                    method: "GET",
                    headers:{
                        "Content-type": "application/json"
                    }
                };
                const response = await fetch(URL2, CONFIG2);
                const json = await response.json();

                console.log(">>DATA>>", json);
                setStore({ planetsList: json.results });
            },
            setFavoritespla: (name) => {
                const {favoritespla} = getStore();
                setStore({ favoritespla: [...favoritespla, name] })
            }
		}
	};
};

export default getState;

