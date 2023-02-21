import { action, computed, makeAutoObservable, toJS } from 'mobx';
import [FTName]DTO from './structures/[FTName]DTO';

export default class [FTName]Model implements [FTName]DTO {
    public id: string;
    public email: string;
    public profileId: string;

    public constructor() {
        makeAutoObservable(this);
        this.id = '';
        this.email = '';
        this.profileId = '';
    }

    @action update = (<FTName | lowercasefirstchar>: [FTName]DTO) => {
        this.email = <FTName | lowercasefirstchar>.email;
        this.id = <FTName | lowercasefirstchar>.id;
        this.profileId = <FTName | lowercasefirstchar>.profileId;
    };

    @computed get get(): [FTName]DTO {
        return toJS(this);
    }
}
