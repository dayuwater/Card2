import React from 'react'
import { Platform, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import { green, secondaryText, white } from '../utils/colors'

export default function MyStepper({ max, unit, step, value, onIncrement, onDecrement }) {
    return (
        <View style={styles.row}>
            {Platform.OS === 'ios'
                ?
                <TouchableOpacity
                    style={styles.iosBtn}
                    onPress={onDecrement}>
                    <Entypo name='minus' size={30} color={green} />
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.androidBtn} onPress={onDecrement}>
                    <FontAwesome name='minus' size={30} color={white} />
                </TouchableOpacity>

            }

            <View style={styles.metricCounter}>
                <Text style={{ fontSize: 24, textAlign: 'center' }}>{value}</Text>
                <Text style={{ fontSize: 18, color: secondaryText }}>{unit}</Text>
            </View>

            {Platform.OS === 'ios'
                ?
                <TouchableOpacity
                    style={styles.iosBtn}
                    onPress={onIncrement}>
                    <Entypo name='plus' size={30} color={green} />
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.androidBtn} onPress={onIncrement}>
                    <FontAwesome name='plus' size={30} color={white} />
                </TouchableOpacity>
            }


        </View>
    )
}

const styles = StyleSheet.create({
    row:{
        flexDirection: "row", 
        alignSelf:"center",
        marginRight: 10
    },
    androidBtn: {
        margin: 5,
        backgroundColor: green,
        padding: 10,
        borderRadius: 2,
    },
    iosBtn: {
        backgroundColor: white,
        borderColor: green,
        borderWidth: 1,
        borderRadius: 3,
        padding: 5,
        paddingLeft: 25,
        paddingRight: 25,
    },
    metricCounter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})