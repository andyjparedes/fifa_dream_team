import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import f442 from './assets/442.png';
import f41212 from './assets/41212.png';
import f433 from './assets/433.png';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { formatWithOptions } from 'util';



const imgGold = "https://futhead.cursecdn.com/static/img/19/cards/large/1_1_3.png";
/** 442 start
 * 
 */
export default function Formation() {
    const [age, setAge] = React.useState(f442);

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
      <div className="formation">
        
        <FormControl>
          <InputLabel id="demo-simple-select-label">Formation</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={f442}>442</MenuItem>
            <MenuItem value={f41212}>41212</MenuItem>
            <MenuItem value={f433}>433</MenuItem>
          </Select>
        </FormControl>
        
        <img src={age} width="400px" height="300px"></img>
        </div>
        );
}