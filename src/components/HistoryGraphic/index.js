import React from "react";
import {View, Dimensions} from 'react-native'
import { LineChart } from "react-native-chart-kit";

export default function HistoryGraphic(props){
    return(
        <View>
            <LineChart
                data={{
                    datasets: [
                        {
                            data: props.infoDataGraphic
                        },
                    ],
                }}
                width={Dimensions.get('window').width} //Pegando a largura da tela
                height={180} //Definindo a altura do gráfico
                yAxisLabel="$"
                yAxisSuffix="k"
                withVerticalLines={false} //Linhas na vertila, nesse caso estão desativadas
                yLabelsOffset={1} //Distância entre as linhas horizontais
                withVerticalLabels={false}
                chartConfig={{
                    backgroundColor: '#000000',
                    backgroundGradientFrom: '#232323',
                    backgroundGradientTo: '#3F3F3F',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity) => `rgba(255, 255, 255, ${opacity})`,
                    propsForDots: {
                        r: '1',
                        strokeWidth: '1',
                        stroke: '#f50d41',
                    },
                }}
                bezier //Serve pra suavizar as linhas
            />
        </View >
    )
}