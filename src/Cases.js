import React, { useEffect, useState } from 'react'
import { FormControl, MenuItem, Select } from '@material-ui/core'
import './Cases.css'
import numeral from "numeral";

function Cases() {
    const [country, setCountry] = useState("WorldWide");
    const [world, setWorld] = useState();
    const [countries, setCountries] = useState([]);
    const [cases, setCases] = useState();
    const [recovered, setRecovered] = useState();
    const [deaths, setDeaths] = useState();
    const [active, setActive] = useState();

    useEffect(() => {
        const getdata = async () => {
            /*await*/ fetch('https://disease.sh/v3/covid-19/all').then(res => res.json()).then(data => {
                setWorld(data);
                setCases(data.cases);
                setRecovered(data.recovered);
                setDeaths(data.deaths);
                setActive(data.active);
            });
        };
        getdata();
    }, []);

    useEffect(() => {
        async function getdata(){
            const request = await fetch('https://disease.sh/v3/covid-19/countries').then(res => res.json());
            setCountries(request);
            return countries ;
        };
        getdata()
    }, []);

    const HandleChange = async (e) => {
        var countr = e.target.value;
        setCountry(e.target.value);
        if (countr === "WorldWide") {
            setCases(world.cases);
            setRecovered(world.recovered);
            setDeaths(world.deaths);
            setActive(world.active);
        } else {
            /*await*/ fetch(`https://disease.sh/v3/covid-19/countries/${countr}`).then(res => res.json()).then(data => {
                setCases(data.cases);
                setRecovered(data.recovered);
                setDeaths(data.deaths);
                setActive(data.active);
            })

        }
    }


    return (
        <div className="cases">
            <div className="cases_map">
                <div className="cases_box box_cases">
                    <p>Total Cases</p>
                    <h1>{world ? numeral(world.cases).format('0,0,0') : 0}</h1>
                </div>
                <div className="cases_box box_recovered">
                    <p>Recovered</p>
                    <h1>{world ? numeral(world.recovered).format('0,0,0') : 0}</h1>
                </div>
                <div className="cases_box box_deaths">
                    <p>Deaths</p>
                    <h1>{world ? numeral(world.deaths).format('0,0,0') : 0}</h1>
                </div>
                <div className="cases_box box_active">
                    <p>Active Cases</p>
                    <h1>{world ? numeral(world.active).format('0,0,0') : 0}</h1>
                </div>
            </div>
            <div className="cases_update">
                <h1>Update News</h1>
                <FormControl className="">
                    <Select value={country} variant="outlined" onChange={HandleChange} >
                        <MenuItem value="WorldWide" className="option"><p>WorldWide</p></MenuItem>
                        {
                            countries? countries.map( data => { return( <MenuItem value={data.countryInfo.iso3} ><img className="country_img" src={data.countryInfo.flag}/><p>{data.country}</p></MenuItem> ); }) : console.log("reload")
                        }
                    </Select>
                </FormControl>
                <div className="box">
                    <div className="update_cases">
                        <p>Totale cases</p>
                        <h1>{numeral(cases).format('0,0a')}</h1>
                    </div>
                    <div className="update_recovered">
                        <p>Recovered</p>
                        <h1>{numeral(recovered).format('0,0a')}</h1>
                    </div>
                    <div className="update_deaths">
                        <p>Deaths</p>
                        <h1>{numeral(deaths).format('0,0a')}</h1>
                    </div>
                    <div className="update_active">
                        <p>Active Cases</p>
                        <h1>{numeral(active).format('0,0a')}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cases
