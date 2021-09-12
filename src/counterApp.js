
import React, { useState } from 'react';

import {

    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber,teslaNews } from '../store/action/index'



const CounterApp = () => {

    const myState = useSelector((state) => state.ChangeTheNumber)
    const myNews = useSelector((state) => state.getTheNews)


    const dispatch=useDispatch();
   

    return (
        <View style={{ alignItems: 'center', paddingTop: 200 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: 200 }}>
                <TouchableOpacity onPress={()=>dispatch(incNumber())} >
                    <Text>Increase</Text>
                </TouchableOpacity>

                <Text>{myState}</Text>


                <TouchableOpacity onPress={() => dispatch(decNumber()) } >
                    <Text>Decrease</Text>
                </TouchableOpacity>

               
            </View>
            <TouchableOpacity onPress={() => dispatch(teslaNews())} >
                <Text>getName</Text>
            </TouchableOpacity>
            <Text>{myNews}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default CounterApp;
