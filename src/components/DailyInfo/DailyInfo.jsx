import React from 'react'
import CSS from './DailyInfo.module.css'
import AddWaterBtn from 'components/AddWaterBtn/AddWaterBtn'
import WaterList from 'components/WaterList/WaterList'

const DailyInfo = () => {
  return (
    <div>
      <AddWaterBtn/>
      <WaterList/>
    </div>
  )
}

export default DailyInfo
