import * as d3 from 'd3'
// import FlowReport from './FlowReport'

const DATA_PATH_BASE_2015 = 'data/2015/'
const DATA_PATH_BASE_2018 = 'data/2018/'

class DataLoader {
  static async loadTextAsArray (url) {
    const response = await window.fetch(url)
    const text = await response.text()
    const array = text.split('\n')
    return array
  }

  static async loadCSV (url) {
    return d3.csv(url)
  }

  static async getIndicatorsOfProgressReport () {
    const url = `${DATA_PATH_BASE_2015}WP2015_Ind_Progress-2.csv`
    return DataLoader.loadCSV(url)
  }

  static async getComparisonReport () {
    const url = `${DATA_PATH_BASE_2018}WP2018_Comparison-2.csv`
    return DataLoader.loadCSV(url)
  }

  static async getLeadershipReport () {
    const url = `${DATA_PATH_BASE_2018}WP2018_Leadership.csv`
    return DataLoader.loadCSV(url)
  }

  static async getMinistryReport () {
    const url = `${DATA_PATH_BASE_2018}WP2018_Ministries-1.csv`
    return DataLoader.loadCSV(url)
  }

  static async getFlowReport () {
    const url = `${DATA_PATH_BASE_2015}WP2015_Flow-1.csv`
    return DataLoader.loadCSV(url)
  }

  static async getOccupationRegionReport () {
    const url = `${DATA_PATH_BASE_2018}WP2018_Rep_Occ_Rgn_v_final.csv`
    return DataLoader.loadCSV(url)
  }

  static async loadAllData () {
    const iopReport = await DataLoader.getIndicatorsOfProgressReport()
    const comparisonReport = await DataLoader.getComparisonReport()
    const leadershipReport = await DataLoader.getLeadershipReport()
    const ministryReport = await DataLoader.getMinistryReport()
    const orReport = await DataLoader.getOccupationRegionReport()
    const flowReport = await DataLoader.getFlowReport()
    return {
      iopReport,
      comparisonReport,
      leadershipReport,
      ministryReport,
      orReport,
      flowReport
    }
  }
}

export default DataLoader
