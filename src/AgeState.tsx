import {observable} from 'mobx';

export class AgeState {
    @observable private _age = 35;
    constructor(age: number) {
        this._age = age;
    }
    public getAge(): number {
        return this._age;
    }
    public setAge(age: number): void {
        this._age = age;
    }
    public addAge(): void {
        this._age = this._age + 1;
    }
}

