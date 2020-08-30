import React from 'react'
import {HeaderButton as NativeHeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from "@expo/vector-icons";

import Colors from "../constants/Colors";

const HeaderButton = props => (
    <NativeHeaderButton IconComponent={Ionicons} iconSize={25} color={Colors.primary} {...props}/>
);

export default HeaderButton