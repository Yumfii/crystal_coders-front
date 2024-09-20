import React, { useState } from 'react'
import UserBarPopover from 'components/UserBarPopover/UserBarPopover'


const UserBar = () => {

  const [isActive, setIsActive] = useState('false')

  const handleToggle = () => {
    setIsActive((prevActiveState)=>!prevActiveState)
  }


  return (
    <div>

      <button type='button' onClick={handleToggle}>
      </button>

      { isActive ? <UserBarPopover/> : <></>}

    </div>
  )
}

export default UserBar
