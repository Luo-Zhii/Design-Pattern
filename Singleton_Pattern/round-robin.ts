class RoundRobin {
    servers: string[]
    index: number
    public static instance: RoundRobin
    constructor() {
        this.servers = []
        this.index = 0 ;
    }

    static getInstance(): RoundRobin {
        if(!RoundRobin.instance)
            RoundRobin.instance = new RoundRobin() 

        return RoundRobin.instance
    }

    addServer(server: string) {
        this.servers.push(server)
    }

    getNextServer(){
        let  server: string = this.servers[this.index]
        // modulus
        this.index = (this.index + 1) % this.servers.length 
        return server 
    }
}

const loadBalance =  RoundRobin.getInstance()


loadBalance.addServer("server 1")
loadBalance.addServer("server 2")
loadBalance.addServer("server 3")

console.log(loadBalance.getNextServer())
console.log(loadBalance.getNextServer())
console.log(loadBalance.getNextServer())
console.log(loadBalance.getNextServer())
console.log(loadBalance.getNextServer())
