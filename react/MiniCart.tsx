import React, { useState } from 'react'
import style from './style.css'

interface Minicart {
  minicart: string
}

const Minicart: StorefrontFunctionComponent<Minicart> = ({ minicart }: { minicart: string }) => {
  const [showMinicart, setShowMinicart] = useState<boolean>(false)
  return (
    <div className={style.minicart_container} onClick={() => { setShowMinicart(!showMinicart) }}>
      <div className={style.minicart_image}>
        <img src={minicart} alt="" />
      </div>
      {showMinicart ?
        <div className={style.minicart_content_main}>
          <div className={style.minicart_content}>
            <div className={style.ayoda_contentDataOne}>Preguntas frecuentes</div>
            <div className={style.ayoda_contentDataTwo}>Como comprar en Autex ?</div>
            <div className={style.ayoda_contentDataThree}> Soporte Autex </div>
          </div>
        </div>
        : ""}

    </div>
  )
}

Minicart.schema = {
  title: 'Minicart Section',
  description: 'Adress Section',
  type: 'object',
  properties: {
    minicart: {
      title: 'Image Url',
      description: "Image Url",
      type: 'string',
      default: null,
    }
  },
}

export default Minicart
