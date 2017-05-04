export class User {
    public id: number;
    public name: string;
    public email: string;
    public created_at: DateTime;
    public updated_at: DateTime;

    public constructor( data: any = {}) {
        this.id = data.id || '';
        this.name = data.name || '';
        this.email = data.email || '';
        this.created_at = data.created_at || '';
        this.updated_at = data.updated_at || '';
    }

    public getName() {
        return this.name;
    }
}