class Champion {
        name: string
        team: number
        position: string
        kill: number
        stats: { minutes: number };
    constructor(name: string, team: number, position:string, kill:number ){
        this.name = name
        this.team = team
        this.position = position
        this.kill = kill
        this.stats = { minutes: 0 };
    }

    getKill(){
        this.kill++
    }

    clone(){
        let clone = new Champion(this.name, this.team, this.position, this.kill)
        clone.stats = structuredClone(this.stats); 
        return clone
    }
}

const prototypePattern = new Champion('', 0, '', 0)
const darius = prototypePattern.clone()
darius.name = 'Darius'
darius.team = 1 
darius.position = 'top'
darius.kill = 0 
darius.stats.minutes = 1000
console.log(darius, `${darius.stats}`)

const aurora = prototypePattern.clone()
aurora.name = 'Aurora'
aurora.team = 1 
aurora.position = 'mid'
aurora.kill = 0 
console.log(aurora)