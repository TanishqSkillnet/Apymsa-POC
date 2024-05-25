import React, { useState } from 'react'
import style from './style.css'

interface Address {
  largeText: String,
  smallText: String,
  imageUrl: string
}

const Address: StorefrontFunctionComponent<Address> = ({
  largeText,
  smallText,
  imageUrl,
}: {
  largeText: String,
  smallText: String,
  imageUrl: string,
}) => {
  return (
    <div className={style.searchBar_container}>
      <div className={style.buscado_para}>
        <div className={style.buscadopara_image}>
          <img src={imageUrl} width={10} alt="" />
        </div>
        <div className={style.buscadopara_content}>
          <span className={style.buscadopara_large}>{largeText}</span>
          <span className={style.buscadopara_smallTwo} >{smallText}</span>
        </div>
      </div>
    </div>
  )
}

Address.schema = {
  title: 'Address Section',
  description: 'Adress Section',
  type: 'object',
  properties: {
    largeText: {
      title: 'Large Text',
      description: 'Large Text',
      type: 'string',
      default: null,
    },
    smallText: {
      title: 'Small Text',
      description: 'Small Text',
      type: 'string',
      default: null,
    },
    imageUrl: {
      title: 'Image Url',
      description: "Image Url",
      type: 'string',
      default: null,
    },
  },
}

export default Address
