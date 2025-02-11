class Leader {
    receiveRequest(request: string){
        console.log(`BOSS::OK::${request}`)
    }
}

class Secretary {
    leader: Leader
    constructor() {
        this.leader = new Leader
    }

    receiveRequest(request: string){
        // Handle data
        this.leader.receiveRequest(request)
    }
}

class Developer {
    offer: string
    constructor(offer: string){
        this.offer = offer
    }
    applyFor(target: Secretary){
        target.receiveRequest(this.offer)
    }
}

const devs = new Developer("LuoZhi wants up to $1k")
devs.applyFor(new Secretary())