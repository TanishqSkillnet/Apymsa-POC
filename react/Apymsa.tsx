import React, { useEffect, useState } from "react";
import { Dropdown } from "vtex.styleguide";
import { Button } from "vtex.styleguide";
import Icon from "vtex.styleguide";
import { IconSearch } from "vtex.store-icons";

import { makes } from "./utils/make";
import { models } from "./utils/model";
import { vehicleData } from "./utils/schema";

interface CountdownProps {}

const Apymsa: StorefrontFunctionComponent<CountdownProps> = ({}) => {

  const [availableYears, setAvailableYears] = useState<any>(
    vehicleData.map((item) => {
      return {
        value: `${item.year}`,
        label: `${item.year}`,
      };
    })
  );

  const [selectedYear, setYear] = useState();

  const [availableMakes, setMakes] = useState<any>();
  const [selectedMake, setMake] = useState();

  const [availableModels, setModels] = useState<any>();
  const [selectedModel, setModel] = useState();

  const [availableEngines,setEngines]= useState<any>();
  const [selectedEngine,setEngine] = useState();




  const handleYearChange = (v: any) => {
    setYear(v.target.value);

    const makes = vehicleData
      .filter((item) => item.year == v.target.value)[0]
      .makes.map((item) => {
        return {
          value: `${item.make}`,
          label: `${item.make}`,
        };
      });
    setMakes(makes);
  };

  const handleMakeChange = (v: any) => {
    setMake(v.target.value);
    const models = vehicleData
      .filter((item) => item.year == Number(selectedYear))[0]
      .makes.filter((item) => item.make === v.target.value)[0].models.map((item=>{
        return {
          value: `${item.name}`,
          label: `${item.name}`,
        }
      }));

    setModels(models)
  };

  const handleModelChange = (v: any) => {
    setModel(v.target.value);
    const engines = vehicleData
    .filter((item) => item.year == Number(selectedYear))[0]
    .makes.filter((item) => item.make === selectedMake)[0].models.filter(item=>item.name === v.target.value)[0].engines.map((item=>{
      return {
        value:`${item}`,
        label:`${item}`
      }
    }));
    
    setEngines(engines)
  };

  const handleEngineChange = (v:any)=>{
    setEngine(v.target.value)
  }

  const handleSearch = () => {
    
  };

  return (
    <div className="flex flex-column   ma5 items-center justify-center ">
      <h3> Encuentra los mejores productos para tu vehículo </h3>
      <div className="flex bg-muted-5 pa7 br4 w-100 items-center justify-between mw9 ">
        <div className="w-90 ph3">
          <Dropdown
            placeholder="Year"
            size="large"
            options={availableYears}
            onChange={(event: any) => handleYearChange(event)}
            value={selectedYear}
          />
        </div>
        <div className="w-90 ph3">
          <Dropdown
            placeholder="Make"
            size="large"
            options={availableMakes}
            onChange={(event: any) => handleMakeChange(event)}
            value={selectedMake}
          />
        </div>
        <div className="w-90 ph3">
          <Dropdown
            placeholder="Model"
            size="large"
            options={availableModels}
            onChange={(event: any) => handleModelChange(event)}
            value={selectedModel}
          />
        </div>
        <div className="w-90 ph3">
          <Dropdown 
            placeholder="Engine (Optional)"
            size="large" 
            options={availableEngines}
            onChange={(event:any)=>handleEngineChange(event)}
            value={selectedEngine}
             />
        </div>
        <div className="mr2 br-100 ph3 near-white ">
          <Button icon={true} variation="primary" className="br-100 ">
            <IconSearch />
          </Button>
        </div>
      </div>
    </div>
  );
};

Apymsa.schema = {
  title: "editor.countdown.title",
  description: "editor.countdown.description",
  type: "object",
  properties: {},
};

export default Apymsa;
