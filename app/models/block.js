'use strict'

class Block{
  constructor(){
  }

  static saveStatsData(height, nonce, deadline, best){
    _.chain(this.all).find((n) => n.height == height).thru((r) => {
      if (!r){
        return
      }

      r.nonces = r.nonces || []
      r.nonces.push({
        nonce: 0,
        deadline: 0,
        best: 0,
      })
    }).value()
  }

  static findBestNonce(height){
    return _.chain(this.all)
            .find((n) => n.height == height)
            .get("nonces")
            .orderBy(["best"], ["desc"]).first().value()
  }

  static save(params){
    return _.chain(this.all)
     .find((n) => n.height == params.height)
     .thru((r) => {
       if (r){
         return
       }

       this.all.push(params)       
       return params
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
  }  
}

module.exports = Block