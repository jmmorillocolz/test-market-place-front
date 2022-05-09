const baseUrlApi = 'http://localhost:8080/api';

export const _CONFIG_ = {
    rootPath: `${baseUrlApi}`,
    appPort: 3000,
    apiMarketPlace: {
        search: `${baseUrlApi}/items?q=:query`,
        details: `${baseUrlApi}/items/:id`
    }
};
