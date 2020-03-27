import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    incidentItem: {
        marginTop: 48,
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 16
    },
    incidentProperty: {
        fontSize: 14,
        color: "#41414d",
        fontWeight: "bold"
    },
    incidentValue: {
        marginTop: 8,
        color: "#737380",
        fontSize: 15,
    },
    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 16
    },
    heroTitle: {
        fontWeight: "bold",
        color: "#13131A",
        lineHeight: 30,
        fontSize: 20
    },
    heroesDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16
    },
    actions: {
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    action : {
        backgroundColor: "#E02041",
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: "center",
        alignItems: "center"
    },
    actionText: {
        color: 'white',
        fontSize: 15,
        fontWeight: "bold"
    }
})