<template>
  <div>
    <h1>Realtime Graph Example</h1>
    <div>
      <div>{{streamData}}</div>
      <div class="graph-line-wrapper">
        <graph-line
                :width="900"
                :height="500"
                  :padding-top="50"
                  :padding-bottom="50"
                  :padding-left="50"
                  :padding-right="50"
                :shape="'normal'"
                :axis-min="lineMin"
                :axis-max="lineMax"
                :axis-full-mode="true"
                :labels="lineLabels"
                :names="lineNames"
                :values="lineValues">
            <!-- <note :text="'กราฟรายได้-แบบเส้น'"></note> -->
            <tooltip :names="lineNames" :position="'right'"></tooltip>
            <legends :names="lineNames"></legends>
            <guideline :tooltip-y="true"></guideline>
        </graph-line>
      </div>
    </div>
  </div>
</template>
<script>

import GraphService from '@/services/GraphService'

export default {
  data () {
    return {
      cnt:4,
      lineNames: ['Real Time Data' ],
      lineValues: [
          [ 10, 5, 5],
      ],
      lineMax: 100,
      lineMin: 0,
      lineLabels : [ '1T', '2T', '3T', '4T' ],
      streamData: 0
    }
  },
  methods: {
    async getSteamData () {
      this.streamData = (await GraphService.getStream()).data  
      this.lineValues[0].push(this.streamData)
      this.cnt++
      this.lineLabels.push(this.cnt+'T')
      // console.log(this.lineValues[0])
    }
  },
  mounted () {
    setInterval(() => {
      this.getSteamData()
    }, 500)
  }
}
</script>
<style scoped>

</style>


