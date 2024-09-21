import React from 'react'
import CSS from './UserBarPopover.module.css'
import { TbSettings } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";

const UserBarPopover = () => {


  return (
    <div className={CSS.popoverBlock}>
      <button type='button' className={`${CSS.popoverBtn}`}>
        <TbSettings className={CSS.settingsIcon} />
        Settings
      </button>
      <button type='button' className={`${CSS.popoverBtn} ${CSS.transparentBtn}`}>
        <LuLogOut />
        Log out
      </button>
    </div>
  )
}

export default UserBarPopover
