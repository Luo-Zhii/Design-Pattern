// If you wants to build micro, easy scale choose 

class ChampionBuilder {
    name: string = ''
    team: string = ''
    position: string = ''
    hp: number = 0
    mp: number = 0
    stats: { minutes: number } = { minutes: 0 };

    withName(name: string) {
        this.name = name
        return this
    }
    withTeam(team: string) {
        this.team = team
        return this
    }
    withPosition(position: string) {
        this.position = position
        return this
    }
    withHp(hp: number) {
        this.hp = hp
        return this
    }
    withMp(mp: number) {
        this.mp = mp
        return this
    }
    withStats(stats: {minutes: number}) {
        this.stats = stats
        return this
    }

    build(){
        return new ChampionProduct(this)
    }
}

class ChampionProduct {
    name: string 
    team: string 
    position: string 
    hp: number 
    mp: number 
    stats: { minutes: number };

    constructor(builder: ChampionBuilder){
        this.name = builder.name
        this.team = builder.team
        this.position = builder.position
        this.hp = builder.hp
        this.mp = builder.mp
        this.stats = builder.stats
    }
    toString() {
        let player = `Player\n`;
        player += `- Name: ${this.name}\n`
        player += `- Team: ${this.team}\n`
        player += `- Position: ${this.position}\n`
        player += `- Hp: ${this.hp}\n`
        player += `- Mp: ${this.mp}\n`
        player += `- States: ${JSON.stringify(this.stats)}\n`
        return player
    }
}
const championBuilder = new ChampionBuilder()
const vayNe = championBuilder
    .withName("VayNe")
    .withTeam("Red")
    .withPosition("Top")
    .withHp(1560)
    .withMp(630)
    .withStats({ minutes: 10 })
    .build()

console.log(vayNe.toString())

