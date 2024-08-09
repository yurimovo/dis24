import React, { useState, useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Departments from "./departments/Departments";
import Hardware from "./hardware/Hardware";
import Sectypes from "./sectypes/Sectypes";
import Fcats from "./fcat/Fcats";
import { useDispatch } from "react-redux";
import { setTabIndex } from "redux-store/slices/tabsSlice";
import { useTabs } from "hooks/useTabs.hook";

import "./style.scss";
import 'react-tabs/style/react-tabs.css';

const Settings = () => {
    const [tabsIndex, setTabsIndex] = useState(0);
    const dispatch = useDispatch();
    const { tabIndex } = useTabs();

    const handleSetTabIndex = (index: number) => {
        setTabsIndex(index);
        dispatch(setTabIndex({ tabIndex: index }));
    };

    useEffect(() => {
        setTabsIndex(tabIndex);
    }, [tabIndex]);

    return (
        <div className="settings">
            <div className="settings__content">
                <Tabs selectedIndex={tabsIndex} onSelect={handleSetTabIndex}>
                    <TabList>
                        <Tab style={{ fontSize: '13px' }}>Подразделения</Tab>
                        <Tab style={{ fontSize: '13px' }}>Оборудование</Tab>
                        <Tab style={{ fontSize: '13px' }}>Виды охраны</Tab>
                        <Tab style={{ fontSize: '13px' }}>Категории объектов</Tab>
                        <Tab disabled style={{ fontSize: '13px' }}>Категории МХИГ</Tab>
                        <Tab disabled style={{ fontSize: '13px' }}>Монтаж</Tab>
                        <Tab disabled style={{ fontSize: '13px' }}>Обслуживание</Tab>
                        <Tab disabled style={{ fontSize: '13px' }}>Сотрудники</Tab>
                    </TabList>

                    <TabPanel>
                        <h2 style={{ color: '#b5533e', textAlign: 'center' }}>Управление подразделениями</h2>
                        <Departments />
                    </TabPanel>
                    <TabPanel>
                        <h2 style={{ color: '#b5533e', textAlign: 'center' }}>Оборудование</h2>
                        <Hardware />
                    </TabPanel>
                    <TabPanel>
                        <h2 style={{ color: '#b5533e', textAlign: 'center' }}>Виды охраны</h2>
                        <Sectypes />
                    </TabPanel>
                    <TabPanel>
                        <h2 style={{ color: '#b5533e', textAlign: 'center' }}>Категории объектов</h2>
                        <Fcats />
                    </TabPanel>
                    <TabPanel>
                        <h2 style={{ color: '#b5533e', textAlign: 'center' }}>Категории МХИГ</h2>
                        <p>Категории МХИГ</p>
                    </TabPanel>
                    <TabPanel>
                        <h2 style={{ color: '#b5533e', textAlign: 'center' }}>Монтажные организации</h2>
                        <p>Монтажные организации</p>
                    </TabPanel>
                    <TabPanel>
                        <h2 style={{ color: '#b5533e', textAlign: 'center' }}>Облсуживающие организации</h2>
                        <p>Облсуживающие организации</p>
                    </TabPanel>
                    <TabPanel>
                        <h2 style={{ color: '#b5533e', textAlign: 'center' }}>Сотрудники</h2>
                        <p>Сотрудники</p>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Settings;