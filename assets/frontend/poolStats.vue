<style lang="scss" scoped>
</style>

<style lang="scss">

</style>

<template>  
  <div v-if="height">
    <Content class="layout-content">
    <h2>Pool Stats</h2>
    
    <Row :gutter=10 style="margin-bottom: 10px">
      <Col span="3">
        <Card class="x-card">
          <p slot="title" title="Miner Count">Miner Count</p>
          <p>{{ minerCount }}</p>
        </Card>
      </Col>

      <Col span="3">
        <Card class="x-card">
          <p slot="title" title="Eff. Pool Capacity">Eff. Pool Capacity</p>
          <p>{{ effectivePoolCapacity }}</p>
        </Card>
      </Col>
    </Row>

    <Row :gutter=10>
      <Col span="3">
        <Card class="x-card">
          <p slot="title" title="Height">Height</p>
          <p>{{ height }}</p>
        </Card>
      </Col>
      <Col span="3">
        <Card class="x-card">
          <p slot="title" title="Mine Deadline">Mine Deadline</p>
          <p>{{ currentDeadline }}</p>
        </Card>
      </Col>      
      <Col span="3">
        <Card class="x-card">
          <p slot="title" title="Best Deadline">Best Deadline</p>
          <p>{{ deadline }}</p>
        </Card>
      </Col>
      <Col span="6">
        <Card class="x-card">
          <p slot="title" title="Best Miner">Best Miner</p>
          <div v-if="accountId">
            <a :href="`https://explore.burst.cryptoguru.org/address/${this.accountId}`" target="_blank">{{ miner }}</a>
          </div>
          <div v-else>
            <p>{{ miner }}</p>
          </div>          
        </Card>
      </Col>      
    </Row>   
  </Content>  

  <Content class="layout-content" v-if="address">
    <h2>Account Stats</h2>

    <Row :gutter=10>
      <Col span="5">
        <Card class="x-card">
          <p slot="title" title="Address">Address</p>
          <a :href="`https://explore.burst.cryptoguru.org/address/${this.address}`" target="_blank">{{ address }}</a>
        </Card>
      </Col>
      <Col span="3">
        <Card class="x-card">
          <p slot="title" title="Effective Capacity">Effective Capacity</p>
          <p>{{ effectiveCapacity }} TB</p>          
        </Card>
      </Col> 
      <Col span="3">
        <Card class="x-card">
          <p slot="title" title="Historical Share">Historical Share</p>
          <p>{{ historicalShare }}%</p>          
        </Card>
      </Col>      
      <Col span="3">
        <Card class="x-card">
          <p slot="title" title="Last Active Blockheight">Last Active Blockheight</p>
          <p>{{ lastActiveBlockHeight }}</p>          
        </Card>
      </Col>      
      <Col span="3">
        <Card class="x-card">
          <p slot="title" title="Valid Deadlines Last 360 Blocks">Valid Deadlines Last 360 Blocks</p>
          <p>{{ nConf }}</p>          
        </Card>
      </Col>      
      <Col span="3">
        <Card class="x-card">
          <p slot="title" title="Pending">Pending Burst</p>
          <p>{{ pending }}</p>          
        </Card>
      </Col>      
    </Row>
  </Content>
  </div>  
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {    
  data () {      
    return  {}
  },

  computed: {
    ...mapState('Pool', [
      "height", "accountId", "address", "nConf", "lastActiveBlockHeight", "minerCount"
    ]),
    ...mapGetters('Pool', {
      deadline: "deadline",
      currentDeadline: "currentDeadline",
      miner: "miner",      

      effectiveCapacity: "effectiveCapacity",
      historicalShare: "historicalShare",      
      pending: "pending",
      effectivePoolCapacity: "effectivePoolCapacity",
    }),
  },

  methods: {      
    
  },

  mounted () {    
  }
}
</script>
