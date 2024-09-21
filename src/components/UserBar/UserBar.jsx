import React, { useState } from 'react'
import { Image } from 'cloudinary-react'
import CSS from './UserBar.module.css'
import UserBarPopover from 'components/UserBarPopover/UserBarPopover'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";



const UserBar = () => {

  const [isActive, setIsActive] = useState(false)

  const handleToggle = () => {
    setIsActive((prevActiveState)=>!prevActiveState)
  }


  return (
    <div>

      <button type='button' className={CSS.userBtn}
        onClick={handleToggle}>
        <span className={CSS.userBtnName}>Nadia</span>
        <Image
          className={CSS.avatarImage}
          cloudName="dwyxffoux"
          publicId="nvtxl4guwbr4a3atayvr"
          crop="scale"
          radius="max"
        />
        {isActive ?
          <IoIosArrowUp className={CSS.arrowIcon} />
          :
          <IoIosArrowDown className={CSS.arrowIcon} />
        }

      </button>

      { isActive ? <UserBarPopover/> : <></>}

    </div>
  )
}

export default UserBar
