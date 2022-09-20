import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Inicio" component={TabNavigator} />
            <Drawer.Screen name="Perfil" component={Profile} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
