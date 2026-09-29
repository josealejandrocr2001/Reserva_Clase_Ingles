import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, Image, Pressable, StyleSheet, TextInput, ScrollView, FlatList } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import EtiquetaNivel from '../components/EtiquetaNivel';
import NivelChip from '../components/NivelChip';
import Card from '../components/Card';
import EstadoVacio from '../components/EstadoVacio';
import useResponsive from '../hooks/useResponsive';

import { radius, spacing, colors, typography } from '../theme';
import { CLASES, NIVELES, formatearPrecio } from '../data/clases';

export default function ClasesScreen({ navigation }) {
    const insets = useSafeAreaInsets();
    const { columnas, paddingHorizontal} = useResponsive('')

    const [nivel, setNivel] = useState()
    const [busqueda, setBusqueda] = useState('')
    
    return (
        <View style={[style.pantalla, { paddingTop: insets.top + spacing.md }]}>
            <View>
                <Text>Aplicación de reservas para clases de inglés</Text>
                <Ionicons name="search" size={18} color={colors.Primario} />
                <TextInput
                    value={busqueda}
                    onChangeText={setBusqueda}
                    placeholder="Ingrese el nombre o nivel para la busqueda"
                    autoCorrect={false}
                    autoComplete="off"
                />
                {
                    busqueda.length > 0 && (
                        <Ionicons
                            name="close-circle"
                            size={18}
                            color={colors.Primario}
                            onPress={() => setBusqueda('')}
                        />
                    )
                }
            </View>

            
        </View>
    );

}
