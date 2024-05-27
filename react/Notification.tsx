import React, { useState } from 'react'
import style from './style.css'

interface Notification {
}

const Notification: StorefrontFunctionComponent<Notification> = ({}) => {
  return (
    <div className={style.notification_container}>
      
    </div>
  )
}

Notification.schema = {
  title: 'Notification Section',
  description: 'Adress Section',
  type: 'object',
  properties: {
  },
}

export default Notification
