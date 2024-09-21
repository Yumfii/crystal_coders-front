import React from 'react'
import CSS from './WaterList.module.css'
import WaterItem from 'components/WaterItem/WaterItem'

const WaterList = () => {
  return (
    <ul>
      {/* {userWater.map(({ml, time}) =>
          <li className={css.listItem}>
          <WaterItem amount={ml} time={time}/>
        </li>)} */}

      <WaterItem/>
    </ul>
  )
}

export default WaterList
