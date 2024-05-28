import React, { useState } from 'react'
import style from './style.css'
import { SearchBar } from 'vtex.store-components'
import { Block } from 'vtex.render-runtime'

interface vtexSearchBar { }

const vtexSearchBar: StorefrontFunctionComponent<vtexSearchBar> = ({ }) => {
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

          <SearchBar containerMode="container" className={style.custom_search_bar}>
            <Block id="autocomplete-result-list.v2" />
          </SearchBar>
      </div>
    </div>

  )
}

vtexSearchBar.schema = {
  title: 'Search Bar',
  description: 'vtexSearchBar Data',
  type: 'object',
  properties: {
  },
}

export default vtexSearchBar
