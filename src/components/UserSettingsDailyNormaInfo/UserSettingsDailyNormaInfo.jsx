import React from 'react'
import CSS from './UserSettingsDailyNormaInfo.module.css'
import { BsExclamationLg } from "react-icons/bs";

const UserSettingsDailyNormaInfo = () => {
  return (
    <div className={CSS.dailyNormaBlock}>
          <span className={CSS.dailyNormaTitle}>
              My daily norma
          </span>
          <span className={CSS.dailyNormaFormulaWrapper}>
            <span className={CSS.dailyNormaFormulaTitle}>
              For woman:
                  <span className={CSS.dailyNormaFormula}>
                      V=(M*0,03) + (T*0,4)
                  </span>
            </span>
            <span className={CSS.dailyNormaFormulaTitle}>
              For man:
                  <span className={CSS.dailyNormaFormula}>
                      V=(M*0,04) + (T*0,6)
                  </span>
            </span>
        </span>

        <span className={CSS.infoParagraph}>
        <span className={CSS.paragraphSpan}>*</span> V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)
      </span>

      <span className={CSS.activeTimeInHours}>
        <BsExclamationLg className={CSS.exclamIcon}/>
            Active time in hours
      </span>
    </div>
  )
}

export default UserSettingsDailyNormaInfo
