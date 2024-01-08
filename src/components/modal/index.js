import { Text, View, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard';

export function ModalPassword({ password, handleClose }) {

    async function handleCopyPassword() {
        await Clipboard.setStringAsync(password);
        alert('Senha copiada com sucesso!')
        handleClose();
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>


                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.text} >{password}</Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]}>
                        <Text style={styles.buttonSaveText}>Salvar Senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(24, 24, 24, 0.6)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        backgroundColor: '#FFF',
        width: '85%',
        paddingBottom: 24,
        paddingTop: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        paddingBottom: 24
    },
    innerPassword: {
        backgroundColor: '#0e0e0e',
        width: '90%',
        borderRadius: 8,
        padding: 14,
    },
    text: {
        color: '#FFF',
        fontSize: 16,
        textAlign: 'center'
    },
    buttonArea: {
        flexDirection: 'row',
        width: '90%',
        marginTop: 8,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        flex: 1,
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14,
    },
    buttonSave: {
        backgroundColor: '#392DE9',
        padding: 8,
        borderRadius: 8
    },
    buttonSaveText: {
        color: '#FFF',
        fontWeight: 'bold',
    }
})