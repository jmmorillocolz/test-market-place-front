export interface IAppConfig {
    rootPath: string;
    appPort: number;
    apiMarketPlace: {
        [key: string]: string;
    };
}
