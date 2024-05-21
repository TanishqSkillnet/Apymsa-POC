import React, { useState } from 'react'
import { Dropdown } from 'vtex.styleguide';
import {Button} from 'vtex.styleguide'
import Icon from 'vtex.styleguide'
import {IconSearch} from 'vtex.store-icons'
import { years } from './utils/years';
import { makes } from './utils/make';
import { models } from './utils/model';
interface CountdownProps {}


const Apymsa: StorefrontFunctionComponent<CountdownProps> = ({}) => {

  const [selectedYear,setYear] = useState(1999);
  const [selectedMake,setMake] =useState('Ford');
  const [selectedModel,setModel] = useState('Mustang')



  const handleSearch=()=>{
      console.log('Clicked')
  }


  return( 
    <div className="flex flex-column   ma5 items-center justify-center ">
      <h3> Encuentra los mejores productos para tu vehículo </h3>
      <div className='flex bg-muted-5 pa7 br4 w-100 items-center justify-between mw9 '>
        <div className="w-90 ph3">
          <Dropdown placeholder="Year" size="large" options={years} value ={selectedYear}/>
        </div>
        <div className="w-90 ph3">
          <Dropdown placeholder="Make" size="large" options={makes} value ={selectedMake} />
        </div>
        <div className="w-90 ph3">
          <Dropdown placeholder="Model" size="large" options={models} value ={selectedModel} />
        </div>
        <div className="w-90 ph3">
          <Dropdown placeholder="Enginge (Optional)" size="large"  />
        </div>
        <div className="mr2 br-100 ph3 near-white ">
          <Button icon={true} variation="primary" className="br-100 ">
            <IconSearch  />
          </Button>
        </div>
      </div>
    </div>
  )
}

Apymsa.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {},
}

export default Apymsa
