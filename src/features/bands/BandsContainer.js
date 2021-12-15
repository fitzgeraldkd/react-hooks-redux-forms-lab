import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import BandInput from "./BandInput";
import { bandAdded } from './bandsSlice';


function BandsContainer() {
  const bands = useSelector(state => state.bands.entities);
  const dispatch = useDispatch();

  const onBandSubmit = name => {
    dispatch(bandAdded(name));
  };

  return (
    <div>
      <BandInput onBandSubmit={onBandSubmit} />
      <ul>
        {bands.map((band, index) => <li key={index}>{band}</li>)}
      </ul>
    </div>
  );
}

export default BandsContainer;
