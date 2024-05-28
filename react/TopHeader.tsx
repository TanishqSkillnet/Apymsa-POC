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
            <img src="https://skillnet.vtexassets.com/assets/vtex.file-manager-graphql/images/0b559c50-1515-46ef-b312-858fd2561e5c___308da13329bcf834deb5f691bf51ba2f.png" width={15} alt="" />&nbsp;{ayoda}
          </div>
          {ayodaContent ? <div className={style.ayoda_content}>
            <div className={style.ayoda_contentDataOne}> <span> Preguntas frecuentes</span></div>
            <div className={style.ayoda_contentDataTwo}><span>Como comprar en Autex ?</span></div>
            <div className={style.ayoda_contentDataThree}> <span>Soporte Autex </span></div>
          </div> :""}
        </div>
        <div className={style.names}>
        <span className={style.logo_setting}>
          <img src="https://skillnet.vtexassets.com/assets/vtex.file-manager-graphql/images/b36c4908-10b0-4316-89d8-6dfa47c81db2___9820d54304e74015c82fc22abf3f88ff.png" width={15} alt="" />
          </span>
           &nbsp;{whatsapp}
        </div>
        <div className={style.names}>
        <span className={style.logo_setting}>
          <img src="https://skillnet.vtexassets.com/assets/vtex.file-manager-graphql/images/be3e84f3-ef33-47f1-9353-167b42a276c4___36b16b58624ef704c62a672ba518e773.png" width={15} alt="" />
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
