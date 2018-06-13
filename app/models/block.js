'use strict'

class Block{
  constructor(params){
    this.readedSize = 0
    this.nonces = []    

    _.merge(this, params)
  }

  getMinedProgress(){  
    return this.readedSize / Plots.getScanSize(this.height >= 502000)
  }

  getBestNonce(){
    return _.chain(this.nonces).orderBy(["deadline"], ["asc"]).first().value()
  }

  static getBestNonce(){
    return this.best
  }

  static getLast360RoundNonce(){
    return _.chain(this.all)
            .slice(-360)
            .map((n) => n.getBestNonce())
            .compact()
            .orderBy(["deadline"], ["asc"])
            .first().value()
  }

  static saveStatsData(params){
    _.chain(this.all).find((n) => n.height == params.height).thru((r) => {
      if (!r){
        return
      }

      r.readedSize += params.readedSize

      if (!params.nonce){
        return
      }

      //global best
      if (!this.best || this.best.deadline > params.deadline){
        this.best = params
      }

      r.nonces = r.nonces || []
      r.nonces.push(params)      
    }).value()
  }  

  static save(params){
    return _.chain(this.all)
     .find((n) => n.height == params.height)
     .thru((r) => {
       if (r){
         return
       }

       const b = new Block(params)
       this.all.push(b)

       return b
     }).value()
  }
  
  static getFresh(){
    return _.last(this.all)
  }

  static getAll(){
    return this.all
  }

  static async initialize(){
    this.all = []

    this.best = null
  }  
}

module.exports = Block