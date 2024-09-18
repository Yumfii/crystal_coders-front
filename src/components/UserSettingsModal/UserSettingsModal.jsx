import React from 'react'
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm'
import CSS from './UserSettingsModal.module.css'

const UserSettingsModal = () => {
    return (

      <div className={CSS.modalContainer}>
        <h2 className={CSS.settingsHeader}>Settings</h2>

        <UserSettingsForm/>
    </div>
  )
}

export default UserSettingsModal
