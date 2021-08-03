import React from 'react';
import s from './Menu.module.css';
import {Paper, Tabs, Tab } from '@material-ui/core';

interface Props {
    addPlayer: any
}

function Menu(props: Props) {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={s.container}>
            <Paper className={s.paper}>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    onChange={handleChange}
                    aria-label="navigation menu tabs"
                    centered
                >
                    <Tab className={s.tab} label="Show mode" />
                    <Tab className={s.tab} label="Edit mode" />
                </Tabs>
            </Paper>
            <button onClick={()=>{props.addPlayer()}}>click</button>
        </div>
    );
}

export default Menu;
