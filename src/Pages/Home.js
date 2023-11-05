import CountryCard from "../Components/CountryCard";
import "./Home.css";
import { useEffect, useState } from "react";
import { getAllCountries } from "../Services";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

function Home() {
  const [allCountriesList, setCountriesList] = useState([]);
  const [filteredCountriesList, setFilteredCountriesList] = useState([]);
  const [region, setRegion] = useState("");
  const [countryName, setCountryName] = useState("");

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handleCountryNameChange = (event) => {
    setCountryName(event.target.value);
  };

  useEffect(() => {
    getAllCountries().then((result) => {
      const countries = result.data;
      setCountriesList(countries);
      setFilteredCountriesList(countries);
    });
  }, []);

  useEffect(() => {
    if (region === "" && countryName === "") {
      setFilteredCountriesList(allCountriesList);
    } else {
      let filteredCountries = allCountriesList;
      if (region.length) {
        //step1: filtering based on region
        filteredCountries = filteredCountries.filter((country) => {

          if (country.region === region) return true;
          return false;
        });
      }
      if (countryName.length) {
        //step2: filtering based on country name
        filteredCountries = filteredCountries.filter((country) => {
          const lowercaseName = country.name.toLowerCase();

          if (lowercaseName.includes(countryName.toLowerCase())) return true;
          return false;
        });
      }

      setFilteredCountriesList(filteredCountries);
    }
  }, [region, allCountriesList, countryName]);

  return (
    <div className="App">
      <div className="filters-wrapper">
        <TextField
          id="outlined-basic"
          label="Filter by name"
          variant="outlined"
          onChange={handleCountryNameChange}
          value={countryName}
        />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">
            Filter by Region
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={region}
            label="Filter by Region"
            onChange={handleRegionChange}
          >
            <MenuItem value={""}>All</MenuItem>
            <MenuItem value={"Africa"}>Africa</MenuItem>
            <MenuItem value={"Americas"}>Americas</MenuItem>
            <MenuItem value={"Asia"}>Asia</MenuItem>
            <MenuItem value={"Europe"}>Europe</MenuItem>
            <MenuItem value={"Oceania"}>Oceania</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="country-card-wrapper">
        {filteredCountriesList.map((country) => (
          <Link
            to={`/countries/${country.alpha3Code}`}
            key={country.alpha3Code}
            style={{ textDecoration: "none" }}
          >
            <CountryCard
              name={country.name}
              capital={country.capital}
              population={country.population}
              flagUrl={country.flags.png}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
