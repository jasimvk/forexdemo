import { Card, CardHeader } from '@mui/material';
import React, { useEffect } from 'react';

const DateTimeView = () => {
    const [date, setDate] = React.useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000); // 1000 milliseconds is 1 second

        return () => clearInterval(interval);
    }, []);
    return (
        <Card  sx={{m:2,pb:2}}>
            <CardHeader
            title={date.toLocaleTimeString()} 
            subheader={`${date.toLocaleDateString('en-US', { weekday: 'long' })}, ${date.toLocaleDateString()}`}            
            /> 
        </Card> 
    );
};

export default DateTimeView;
