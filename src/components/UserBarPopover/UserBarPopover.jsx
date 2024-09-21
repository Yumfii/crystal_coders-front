import React, { useState } from 'react'
import CSS from './UserBarPopover.module.css'
import { TbSettings } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";

const UserBarPopover = () => {
  const [openModa, setOpenModal] = useState(false)

  const isModalOpen = () => {
    setOpenModal(true)
  }

  return (
    <div className={CSS.popoverBlock}>
      <button type='button' className={`${CSS.popoverBtn}`}>
        <TbSettings className={CSS.settingsIcon}
          onClick={isModalOpen}/>
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
