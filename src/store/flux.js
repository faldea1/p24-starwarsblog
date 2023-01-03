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
            favoritespla: [],
            planetsList: []
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

