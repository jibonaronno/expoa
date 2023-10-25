/**
 * 
 * npx npm install --force react-native-chart-kit
 * npx npm install --force react-native-svg
 */

import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

class _primary_elemnts {
    _displacement: Float32Array | undefined;
    _accel: Float32Array | undefined;
    _kinematics: Float32Array | undefined;
    constructor(parameters: ArrayBuffer) {
        
    }
}

const velocity = (displacement: number, _time: number) => {
    var _velocity = 0;

    _velocity = displacement / _time;
    return _velocity;
}

const force = (_mass: number, _accell: number) => {
    var _force = _mass * _accell;

    return _force;
}

const energy = (_newtons: number, _meters: number) => {
    var _energy = _newtons * _meters;

    return _energy;
}

var sineArr: Float[];
var _sineArr: Float[];
var sineLabels: string[];
var thrArr: Float[];
var lidxA: number;
var lidxB: number;
var repsA: number;
var _repsA: number;

var lastValue: Float;

lidxA = 0;
lidxB = 10;
repsA = 0;
_repsA = 0;

export default function AccelDemo() {

    var thrCrossedCount: number;
    var thrFF: boolean;
    thrCrossedCount = 0;
    thrFF = false;
    //lidxA = 0;
    _sineArr = [0.0];
    sineLabels = [""];
    //thrArr = [0];

    lastValue = 0.0;

    var [sineArr, setSineData] = useState<Float[]>([0.0]);
    var [thrArr, setThrData] = useState<Float[]>([0.0]);
    var [lastValue, setLastValue] = useState<Float>(0.0);

    const [accelDataList, setAccelDataList] = useState([12.0, 12.1, 13.0, 14.1, 15.5, 16.9, 17.8, 18.5, 20.3, 25.5, 28.9, 25.0, 22.3, 20.1, 18.5, 15.7, 12.3, 10.9, 8.9, 7.8, 6.5, 3.3]);
    const [dataLen, setDataLen] = useState<number>();

    const [startIndex, setStartIndex] = useState<number>(0);
    const [stopIndex, setStoptIndex] = useState<number>(10);

    var [repsA, setRepsA] = useState<number>(0);

    const CalculateSlope = () => {
        const half_datalen = accelDataList.length / 2;
        const arrA = accelDataList.slice(0, (half_datalen - 1));
    }

    const generateWave = () => {
        for(var i=0;i<20;i++)
        {
            sineArr.push(Math.sin(i) * 1);
            sineLabels.push(i.toString());
            thrArr.push(0);
        }

        return sineArr.length;
    }

    const getArrInfo = () => {
        const half_datalen = accelDataList.length / 2;

        const arrA = accelDataList.slice(0, (half_datalen));

        const arrB = accelDataList.slice(half_datalen, (accelDataList.length));

        return [arrA.length, arrB.length];
    }

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 0) => `rgba(26, 55, 46, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };

    const data = {
    labels: sineLabels,
    datasets: [{data:sineArr}, {data:thrArr}]
    };

    const repsFromWave = () => {
        if(sineArr[lidxB] > 0.1)
        {
            if(thrCrossedCount > 0)
            {
                if(!thrFF)
                {
                    thrFF = true;
                    repsA++;
                    setRepsA(repsA);
                }
                thrCrossedCount = 4;
                repsA++;
                setRepsA(repsA);
            }
            else
            {
                thrCrossedCount++;
            }

            setRepsA(repsA);
        }
        else
        {
            thrCrossedCount = 0;
            thrFF = false;
        }

        return _repsA;
    }

    const regenerateWave = () => {
        sineArr.splice(0);
        thrArr.splice(0);
        
        for(var i=startIndex;i<stopIndex;i++)
        {
            _sineArr.push(Math.sin(i) * 10);
            sineLabels.push(i.toString());
            thrArr.push(0);
        }

        lastValue = _sineArr[9];
        setLastValue(_sineArr[9]);

        setSineData(_sineArr);

        setThrData(thrArr);

        //setLastValue(sineArr[stopIndex]);

        console.log(stopIndex);
        console.log(lastValue);

        return sineArr.length;
    }

    useEffect(() => {
    

        regenerateWave();

        console.log("useEffect Runs...");
    }, []);

    const AccelDataSize = () => {

        return (
            <View style={stylesA.container}>
                {/* <Text style={stylesA.boldtext}> Length of accelDataList:  {dataLen} </Text> */}
                {/* <Button onPress={() => {
                    //regenerateWave();
                    //setSineData(sineArr);
                    //setSineData(sineArr);
                    sineArr.pop();
                    setSineData(sineArr);
                }
                } title="Generate" /> */}

                <Button onPress={() => {
                    //accelDataList.push(55.5);
                    //setDataLen(accelDataList.length);
                    regenerateWave();
                    //sineArr.push(0);
                    //sineArr.pop();
                    //setSineData(sineArr);
                    if(lidxB < 360) {
                        lidxA++;
                        lidxB++;
                    } else {
                        lidxA = 0;
                        lidxB = 10;
                    }
                    setStartIndex(lidxA);
                    setStoptIndex(lidxB);
                    // setLastValue(sineArr[stopIndex]);
                    //repsFromWave();
                    if(lastValue > 0.0){
                        _repsA++;
                        setRepsA(_repsA);
                    }
                }
                } title="Push" />
                <Text>{getArrInfo()[0]}, {getArrInfo()[1]}</Text>
                {/* <Text>sineArr size: {sineArr.length}</Text> */}
                <Text> lidxA : {lidxA}</Text>
                <Text> Start Index : {startIndex} stopIndex: {stopIndex}</Text>
                <Text>sineArr size: {}</Text>
                <LineChart data={data} width={400} height={220} chartConfig={chartConfig} bezier style={{ marginVertical: 8, borderRadius: 16, }}></LineChart>
                <Text style={stylesA.boldtext}>Reps: {repsA}</Text>
                <Text> Last Value: {lastValue} </Text>
            </View>
            
        );
    }

    return (
        <AccelDataSize />
    );

}

const stylesA = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        width: '100%',
        height: '15%',
        backgroundColor: '#c8c8c8',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    boldtext: {
        fontWeight: 'bold',
        fontSize: 14
    },
    body: {
        backgroundColor: 'yellow',
        padding: 20
    }
});
