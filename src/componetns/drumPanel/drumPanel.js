import React from "react";
import bankOne from '../../data/data';
import DrumButton from "../drumButton/drumButton";


const DrumPanel = () =>{ return ( bankOne.map((i) => 
              <DrumButton
                keyTrigger={i.keyTrigger}
                />
)
        );}
export default DrumPanel;
