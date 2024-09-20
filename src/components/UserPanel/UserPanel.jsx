import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/auth/selectors'
import UserBar from 'components/UserBar/UserBar'

const UserPanel = () => {

  const user = useSelector(selectUser)

  return (
    <div>
      <h2>Hello, {user.email}</h2>

      <UserBar/>

    </div>
  )
}

export default UserPanel
