import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/auth/selectors'
import UserBar from 'components/UserBar/UserBar'
import CSS from './UserPanel.module.css'

const UserPanel = () => {

  const user = useSelector(selectUser);

  return (
    <div className={CSS.userPanelSection}>
      <h2 className={CSS.userPanelHeader}>Hello, &nbsp;
        <span className={CSS.userPanelHeaderSpan}>
          {/* {user.email} */}
          {user.name}
        </span>
      </h2>

      <UserBar />

    </div>
  )
}

export default UserPanel
