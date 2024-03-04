import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";


const Albumdetail = (props) => {
    const { songname, artist, image, color } = props.album;
    return (
            <View style={styles.box} backgroundColor={color}>
                <Text style={styles.title}>{songname}</Text>
                <Text style={styles.artist}>{artist}</Text>
                <Image style={styles.image} source={{uri: image}} />
            </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: "500",
        alignSelf: "center"
    },
    artist: {
        alignSelf: "center"
    },
    image: {
        width: 250,
        height: 250,
        alignSelf: "center"
    },
    box: {
        marginBottom: 20,
        backgroundColor: "lightgray",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2
    }
})

export default Albumdetail;
