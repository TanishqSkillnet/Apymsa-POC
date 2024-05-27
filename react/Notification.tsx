import React, { useState } from 'react'
import style from './style.css'

interface Notification {
  notification:string
}

const Notification: StorefrontFunctionComponent<Notification> = ({notification}:{notification:string}) => {
  return (
    <div className={style.notification_container}>
      <div className={style.notification_image}>
        <img src={notification} alt="" />
      </div>
      <div className={style.notification_content}>
        <div className={style.notification_content}>
            <div className={style.ayoda_contentDataOne}>Preguntas frecuentes</div>
            <div className={style.ayoda_contentDataTwo}>Como comprar en Autex ?</div>
            <div className={style.ayoda_contentDataThree}> Soporte Autex </div>
          </div>
        </div>
    </div>
  )
}

Notification.schema = {
  title: 'Notification Section',
  description: 'Adress Section',
  type: 'object',
  properties: {
    notification:{
      title: 'Image Url',
      description: "Image Url",
      type: 'string',
      default: null,
    }
  },
}

export default Notification
