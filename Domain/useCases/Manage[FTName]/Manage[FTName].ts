import [FTName]Repository from 'domain/repositories/[FTName]/[FTName]Repository';

import [FTName]Model from 'domain/models/[FTName]/[FTName]Model';
import [FTName]DTO from 'domain/models/[FTName]/structures/[FTName]DTO';

export default class Manage[FTName] {
    private <FTName | lowercasefirstchar>Repository: [FTName]Repository;
    private <FTName | lowercasefirstchar>Model: [FTName]Model;

    public constructor(<FTName | lowercasefirstchar>Repository: [FTName]Repository, <FTName | lowercasefirstchar>Model: [FTName]Model) {
        this.<FTName | lowercasefirstchar>Repository = <FTName | lowercasefirstchar>Repository;
        this.<FTName | lowercasefirstchar>Model = <FTName | lowercasefirstchar>Model;
    }

    public async start(): Promise<any> {
        return this.<FTName | lowercasefirstchar>Repository
            .get[FTName]()
            .then((<FTName | lowercasefirstchar>Data: [FTName]DTO) => {
                this.<FTName | lowercasefirstchar>Model.update(<FTName | lowercasefirstchar>Data);
            })
            .catch((e: any) => Promise.reject(e));
    }
}