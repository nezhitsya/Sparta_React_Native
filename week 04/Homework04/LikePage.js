import React, {useState, useEffect} from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { firebase_db } from '../firebaseConfig';
import Constants from 'expo-constants';
import LikeCard from '../components/LikeCard';
import Loading from '../components/Loading';

export default function LikePage({navigation, route}) {

    const [tip, setTip] = useState([])
    const [ready, setReady] = useState(true)

    const reload = () => {
        const user_id = Constants.installationId
        firebase_db.ref('/like/' + user_id).once('value').then((snapshot) => {
            if (snapshot.exists()) {
                let tip = snapshot.val()
                let tip_list = Object.values(tip)
                setTip(tip_list)
            } else {
                setReady(true)
                setTip([])
            }
        })
    }

    useEffect(() => {
        navigation.setOptions({
            title: '찜한 팁'
        })
        
        const user_id = Constants.installationId
        firebase_db.ref('/like/' + user_id).once('value').then((snapshot) => {
            let tip = snapshot.val()
            let tip_list = Object.values(tip)

            if (tip_list.length > 0) {
                setTip(tip_list)
                setReady(false)
            }
        })
    }, [])
    
    return ready ? <Loading/> : (
        <ScrollView style={styles.container}>
            {
                tip.map((content, i) => {
                    return (
                        <LikeCard key={i} reload={reload} content={content} navigation={navigation} />
                    )
                })
            }
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
})