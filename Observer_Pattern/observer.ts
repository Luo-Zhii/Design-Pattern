interface locationData {
    long: number,
    lat: number
}

// Private part 
class Observer {
    namePick: string 
    constructor(name: string){
        this.namePick = name 
    }

    updateStatus(location: locationData) {
        this.ping(location)
    }

    ping(location: locationData) {
        console.log(`${this.namePick}:::PING::: in location ${JSON.stringify(location)}`)
    }
}


// Common part 
class Subject {
    observers: Observer[]
    constructor() {
        this.observers = []
    }
    addChampion(champion: Observer ){
        this.observers.push(champion)
    }
    notify(location: locationData){
        this.observers.forEach(observer => observer.ping(location))
    }
}

const darius = new Observer("Darius")
const zac = new Observer("Zac")
const mel = new Observer("Mel")
const twitch = new Observer("Twitch")
const leona = new Observer("Leona")

const subject = new Subject()

subject.addChampion(darius)
subject.addChampion(zac)
subject.addChampion(mel)
subject.addChampion(twitch)
subject.addChampion(leona)

subject.notify({long: 1234, lat: 345})
