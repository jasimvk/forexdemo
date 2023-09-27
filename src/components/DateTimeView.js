import { Card, CardHeader, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import useResponsive from '../hooks/useResponsive';

const DateTimeView = () => {
    const [date, setDate] = React.useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000); // 1000 milliseconds is 1 second

        return () => clearInterval(interval);
    }, []);
    const mdUp = useResponsive('up', 'md');
    return (
        mdUp ? <Card sx={{
            m: 2, p: 1.75, mr: 0, ml: 0
            // backgroundColor:"#f9fafbcc"
        }}>
            <> <Typography variant="h4" textAlign={"right"}
                sx={{ p: 1, pb: 0, pt: 0 }}>
                {date.toLocaleTimeString()}
            </Typography>
                <Typography variant="body1" textAlign={"right"}
                    sx={{ p: 1, }}>
                    {`${date.toLocaleDateString('en-US', { weekday: 'long' })}, ${date.toLocaleDateString()}`}
                </Typography></>
        </Card> : 
        <>
            <Typography variant="h6"  textAlign={"right"}
                sx={{ p: 1, pb: 0  }}>
                {date.toLocaleTimeString()}
            </Typography>
            <Typography  gutterBottom textAlign={"right"}
                sx={{ p:1,pt: 0,fontSize:12 }}>
                {`${date.toLocaleDateString('en-US', { weekday: 'long' })}, ${date.toLocaleDateString()}`}
            </Typography></>

    );
};

export default DateTimeView;
