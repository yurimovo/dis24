import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import Departments from "./departments/Departments";
import "./style.scss";
import 'react-tabs/style/react-tabs.css';

const Settings = () => {
    return (
        <div className="settings">
            <div className="settings__content">
            <Tabs>
                <TabList>
                    <Tab>Подразделения</Tab>
                    <Tab>Вкладка 2</Tab>
                    <Tab>Вкладка 3</Tab>
                </TabList>

                <TabPanel>
                    <h2>Управление подразделениями</h2>
                    <Departments />
                </TabPanel>
                <TabPanel>
                    <h2>Содержимое Вкладки 2</h2>
                    <p>Здесь также может быть контент.</p>
                </TabPanel>
                <TabPanel>
                    <h2>Содержимое Вкладки 3</h2>
                    <p>И ещё немного контента.</p>
                </TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default Settings;