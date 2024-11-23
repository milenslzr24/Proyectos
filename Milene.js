
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Milene(){
    <View style= {styles.tarjeta}>
        <Image source = {{uri: 'https://ae01.alicdn.com/kf/S5fc67d9f6e284f3da96aebef75af5e97U.jpg_640x640.jpg_.webp'}}
        style= {styles.eventoImagen}/>
        <View style={styles.contenido}>
            <Text style={styles.titulo}>Bad Bunny en El Salvador</Text>
            <Text style={styles.información}>La gira del artista puertorriqueño lo ha llevado a diferentes ciudades
            de Latinoamérica, este sábado finalmente será el turno de nuestro país.</Text>
            <View style={styles.detalles}>
                <Text style={styles.detalleTexto}>Estadio Cuscatlán</Text>
                <Text style={styles.detalleTexto}>Dom, 30 de Mar</Text>
                <TouchableOpacity style={styles.boton}>
                    <Text styles={styles.botonTexto}>Tickets disponibles!</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>

}

const styles = StyleSheet.create({
    eventoImagen: {
        width: '100%',
        height: 200,
    },
    tarjeta: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        overflow: 'hidden',
        margin: 20,
    },
    detalles: {
        padding: 15,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000',
    },
    información:{
        fontSize: 14,
        color: '#555',
        marginBottom: 10,
    },
    detalles: {
        marginTop: 10,
    },
    detalleTexto: {
        fontSize: 14,
        color: '#444',
        marginBottom: 5,
    },
    boton: {
        marginTop: 10,
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    botonTexto: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

});