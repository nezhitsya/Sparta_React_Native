import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import {firebase_db} from '../firebaseConfig';
import Constants from 'expo-constants';

export default function LikeCard({content, navigation, reload}) {

    const detail = () => {
        navigation.navigate('DetailPage', {idx: content.idx})
    }

    const remove = () => {
        const user_id = Constants.installationId
        firebase_db.ref('/like/' + user_id + '/' + content.idx).remove().then(function() {
            Alert.alert('삭제되었습니다.')
            // navigation.navigate('LikePage')
            reload()
        })
    }

    return (
        <View style={styles.card}>
            <Image style={styles.cardImage} source={{uri:content.image}} />
            <View style={styles.cardText}>
                <Text style={styles.cardTitle}>{content.title}</Text>
                <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
                <Text style={styles.cardDate}>{content.date}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => detail()}>
                        <Text style={styles.buttonText}>자세히 보기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => remove()}>
                        <Text style={styles.buttonText}>찜 삭제</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: '#eee',
        padding: 10
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    cardImage: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    cardText: {
        flex: 2,
        marginStart: 10,
        marginEnd: 10
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    cardDesc: {
        fontSize: 15,
        marginTop: 10
    },
    cardDate: {
        fontSize: 10,
        color: '#a6a6a6',
        marginTop: 10
    },
    button: {
        width: 100,
        height: 50,
        padding: 15,
        borderColor: 'orange',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10
    },
    buttonText: {
        color: 'orange',
        textAlign: 'center'
    }
})