import AxiosWrapper from "./AxiosWrapper";
import Storage from "./Storage";

class APIClient {
    constructor() {
        this.storage = new Storage(window.localStorage)
    }

    fetchCharacters() {
        const wrapper = new AxiosWrapper('https://rickandmortyapi.com/api/character');
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
