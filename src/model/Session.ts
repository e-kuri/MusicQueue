export interface ISession {
    id?: string, 
    queue: string[]
}

class Session implements ISession {
    constructor(queue?: string[], id?: string){
        this.queue = queue ? queue : [];
        this.id = id;
    }

    id?: string;
    queue: string[];

    toJson(): ISession {
        const jsonObj : ISession = {
            queue: this.queue
        };
        if(this.id) {
            jsonObj.id = this.id;
        }
        return jsonObj;
    }
}

export default Session;