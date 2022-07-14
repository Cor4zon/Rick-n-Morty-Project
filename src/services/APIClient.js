import AxiosWrapper from "./AxiosWrapper";
import Storage from "./Storage";

class APIClient {
    constructor() {
        this.storage = new Storage(window.localStorage)
    }

    fetchCharacters(path="https://rickandmortyapi.com/api/character") {
        const wrapper = new AxiosWrapper(path);
        return Promise.resolve(
            wrapper.get()
                .catch((error) => {
                    this.storage.clear();
                    console.error(error);
                    return Promise.reject(error);
                })
        )
    }

    fetchOneCharacter(id) {
        const wrapper = new AxiosWrapper("https://rickandmortyapi.com/api/character/" + id);
        return Promise.resolve(
            wrapper.get()
                .catch((error) => {
                    this.storage.clear();
                    console.error(error);
                    return Promise.reject(error);
                })
        )
    }

    fetchCharactersBySpecies(species) {
        const wrapper = new AxiosWrapper("https://rickandmortyapi.com/api/character/?species=" + species);
        return Promise.resolve(
            wrapper.get()
                .catch((error) => {
                    this.storage.clear();
                    console.error(error);
                    return Promise.reject(error);
                })
        )
    }
}

export default APIClient;
