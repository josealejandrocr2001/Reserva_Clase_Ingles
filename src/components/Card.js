import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import EtiquetaNivel from './EtiquetaNivel';
import { spacing, radius, colors, typography } from '../theme';
import { formatearPrecio } from '../data/clases';

export default function Card({ clase, onPress }) {

    return (
        <Pressable 
            onPress={onPress}
        >
            <Image source={{ uri: clase.Image }} />
            <View>
                <EtiquetaNivel nivel={clase.nivel} />
            </View>

        </Pressable>
    )


}

