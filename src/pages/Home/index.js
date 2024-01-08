import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native"
import Slider from '@react-native-community/slider';
import { ModalPassword } from '../../components/modal'


export function Home() {

    const [size, setSize] = useState(10)
    const [password, setPassword] = useState('')
    const [modalVisible, setModalVisible] = useState(false)

    const generatePassword = () => {
        let password = ''
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+'
        for (let i = 0; i < size; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length))
        }
        setPassword(password)
        setModalVisible(true)
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>{size} caracteres</Text>
            <View style={styles.area}>
                <Slider
                    style={{ height: 50 }}
                    minimumValue={6}
                    maximumValue={20}
                    maximumTrackTintColor="#ff0000"
                    minimumTrackTintColor="#0000ff"
                    thumbTintColor="#ff0000"
                    value={size}
                    onValueChange={(value) => setSize(value.toFixed(0))}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={generatePassword}>
                <Text style={styles.buttonText}>Gerar Senha</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType="fade" transparent={true}>
                <ModalPassword password={password} handleClose={() => setModalVisible(false)} />
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginBottom: 60
    },
    area: {
        marginTop: 14,
        marginBottom: 14,
        width: '80%',
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 8,
    },
    button: {
        backgroundColor: '#0000ff',
        width: '80%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginBottom: 18
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    }
})