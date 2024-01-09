import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";
import useStorage from "../../hooks/useStorage";

export function Passwords() {
    const [listPasswords, setListPasswords] = useState([])
    const isFocused = useIsFocused();
    const { getItem } = useStorage();

    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItem("@password");
            setListPasswords(passwords);
            console.log(listPasswords);
        }
    }, [isFocused])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas Senhas</Text>

                <Text style={styles.title}>{listPasswords.length}</Text>

                <View style={styles.content}>
                    <FlatList
                        style={{ flex: 1, paddingTop: 14 }}
                        data={listPasswords}
                        keyExtractor={(item) => String(item)}
                        renderItem={({ item }) => <Text >{item}</Text>}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    header: {
        backgroundColor: '#392de9',
        padding: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})