import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import SelectOption from '../../components/Forms/SelectOption';
import { setTypeFilter } from '../../redux/actions/PokemonActions';
// import { PokemonList } from '../../redux/interfaces/Pokemon'
import { REACT_APP_API_URL } from '../../utils/Env';

const Filtered: FC = () => {
  const dispatch = useDispatch();
  const [listType, setListType] = useState([])
  const [type, setType] = useState('')

  useEffect(() => {
    getPokemonType()
  }, []);

  const getPokemonType = () => {
    fetch(`${REACT_APP_API_URL}/type`, {
      method: "GET"
    }).then(res => res.json())
      .then((res) => {
        setListType(res.results);
      })
      .catch(err => {
        console.warn(err);
      });
  }

  const handleChange = (val: string) => {
    setType(val)
    dispatch(setTypeFilter(val));
  }

  return (
    <>
      <SelectOption
        label="Filter"
        classes="select-filter"
        options={listType}
        changeEvent={(val: string) => handleChange(val) }
        value={type}
      />
    </>
  )
}

export default Filtered