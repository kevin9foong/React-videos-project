import React from 'react'; 
import './SeasonDisplay.css';

//we are using function based components as in the course.
const displayOptions = {
    Summer: {
        text: "Let's go to the beach!", 
        iconName: "sun"
    }, 
    Winter: {
        text: "It's cold outside!", 
        iconName: "snowflake"
    }
}

//extract logic from func components
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) { 
        return lat<0 ? 'Winter' : 'Summer'; //ternery expression. 
    }
    return lat>0 ? 'Summer' : 'Winter'; 
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth);  

    return (
        <div className={`season-display ${season}`}> 
            <i className={`icon-left ${displayOptions[season].iconName} icon massive`} />
            <h1 className={'center-text'}>{displayOptions[season].text}</h1>
            <i className={`icon-right ${displayOptions[season].iconName} icon massive`} />
        </div>
    )
}

export default SeasonDisplay; 