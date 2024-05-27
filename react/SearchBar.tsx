import React, { useState } from 'react'
import style from './style.css'

interface SearchBar { }

const SearchBar: StorefrontFunctionComponent<SearchBar> = ({ }) => {
  const [todas, setTodas] = useState<boolean>(false)
  return (
    <div className={style.searchBar_container}>
      <div className={style.search_bar}>
        <div className={style.especialidades}>
          <div>
            <div className={style.text_especialidados} onClick={() => { setTodas(!todas) }}>
              <span className={style.especialidados_las}>Todos las Especialidades</span>
            </div>
            {todas ?
              <div>
                <div className={style.Todas_las_Especialidades}>
                  <div className={style.Todas_las_Especialidades_contentDataOne}><span> Automotriz  </span></div>
                  <div className={style.Todas_las_Especialidades_contentDataTwo}><span> Ferretería  </span></div>
                  <div className={style.Todas_las_Especialidades_contentDataFour}>  <span>Herramientas y equipos   </span></div>
                  <div className={style.Todas_las_Especialidades_contentDataFive}> <span> Motocicletas   </span></div>
                  <div className={style.Todas_las_Especialidades_contentDataThree}>  <span> Seguridad y prevención  </span></div>
                </div>
              </div> : ""}
          </div>
          <div className={style.image_especialidados} onClick={() => { setTodas(!todas) }}>
            <img src="https://skillnet.vteximg.com.br/arquivos/downArrow.png" width={5} alt="" />
          </div>
        </div>
        <div className={style.search_input_container}>
          <div className={style.search_input_wrapper}>
            <input type="text" className={style.search_input} placeholder='Buscar marca, modelo, tipo de producto ...' />
            <img src="https://skillnet.vteximg.com.br/arquivos/search.png" width={10} alt="" className={style.search_icon} />
          </div>
        </div>
      </div>
    </div>
  )
}

SearchBar.schema = {
  title: 'Search Bar',
  description: 'SearchBar Data',
  type: 'object',
  properties: {
  },
}

export default SearchBar
