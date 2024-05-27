import React,{useState} from 'react'
import style from './style.css'

interface TopHeader {
  gratis: String,
  compras: String,
  ayoda: String,
  call: String,
  whatsapp: String
}

const TopHeader: StorefrontFunctionComponent<TopHeader> = ({ gratis,
  compras,
  ayoda,
  call,
  whatsapp,
}: {
  gratis: String,
  compras: String,
  ayoda: String,
  call: String,
  whatsapp: String
}) => {

  const [ayodaContent, setAyodaContent] = useState(false)

  return (
    <div className={style.topheader_container}>
      <div className={style.interalContainer}>
        <div className={style.names}>
          <span>
          {gratis}
          </span>
        </div>
        <div className={style.partition}>
          <span>
          |
          </span>
        </div>
        <div className={style.names}>
          <span>
          {compras}
          </span>
        </div>
      </div>
      <div className={style.interalContainer}>
        <div className={style.names_different} onClick={()=>setAyodaContent(!ayodaContent)}>
          <div>
            <img src="https://skillnet.vteximg.com.br/arquivos/info.png" width={15} alt="" />&nbsp;{ayoda}
          </div>
          {ayodaContent ? <div className={style.ayoda_content}>
            <div className={style.ayoda_contentDataOne}> <span> Preguntas frecuentes</span></div>
            <div className={style.ayoda_contentDataTwo}><span>Como comprar en Autex ?</span></div>
            <div className={style.ayoda_contentDataThree}> <span>Soporte Autex </span></div>
          </div> :""}
        </div>
        <div className={style.names}>
        <span className={style.logo_setting}>
          <img src="https://skillnet.vteximg.com.br/arquivos/whatsapp.png" width={15} alt="" />
          </span>
           &nbsp;{whatsapp}
        </div>
        <div className={style.names}>
        <span className={style.logo_setting}>
          <img src="https://skillnet.vteximg.com.br/arquivos/calling.png" width={15} alt="" />
          </span> &nbsp;<span>{call}</span>
        </div>
      </div>
    </div>
  )
}

TopHeader.schema = {
  title: 'Top-Header',
  description: 'Top-Header Data',
  type: 'object',
  properties: {
    gratis: {
      title: 'Envio gratis',
      description: 'Envio gratis',
      type: 'string',
      default: "ENVIO GRATIS A TODO MEXICO",
    },
    compras: {
      title: 'Compras Mayores',
      description: 'Compras Mayores',
      type: 'string',
      default: "COMPRAS MAYORES A $549MXN",
    },
    ayoda: {
      title: 'ayoda',
      description: 'ayoda',
      type: 'string',
      default: "AYODA",
    },
    call: {
      title: 'call',
      description: 'call',
      type: 'string',
      default: "33 3205 4440",
    },
    whatsapp: {
      title: 'whatsapp',
      description: 'whatsapp',
      type: 'string',
      default: "33 2835 9694",
    },

  },
}

export default TopHeader
