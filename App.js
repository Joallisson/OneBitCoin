import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, StatusBar, SafeAreaView, Platform } from 'react-native';

import HistoryGraphic from './src/components/HistoryGraphic';
import CurrentPrice from './src/components/CurrentPrice';
import QuotationsList from './src/components/QuotationsList';

function addZero(number){
  if (number <= 9) {
    return "0" + number
  }
  return number
}

function url(qtdDays){
  const date = new Date();
  const listLastDays = qtdDays;
  const end_date = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
  
  date.setDate(date.getDate() - listLastDays);

  const start_date = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`;
}

async function getListCoins(url){
  
  let response = await fetch(url)
  let returnApi = await response.json()
  let selectListQuotations = returnApi.bpi
  const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
    return{
      data: key.split('-').reverse().join('/'),
      valor: selectListQuotations[key]
    }
  });
  let data = queryCoinsList.reverse()
  return data 
}

async function getPriceCoinsGraphic(url){
  let responseG = await fetch(url)
  let returnApiG = await responseG.json()
  let selectListQuotationsG = returnApiG.bpi
  const queryCoinsList = Object.keys(selectListQuotationsG).map((key) => {
      return selectListQuotationsG[key]
  });
  let dataG = queryCoinsList
  return dataG 
}

export default function App() {
  
  const [coinsList, setCoinList] = useState([])
  const [coinsGraphicList, setCoinsGraphicList] = useState([0])
  const [days, setDays] = useState(30)
  const [updateData, setUpdateData] = useState(true)
  const [price, setPrice] = useState()

  function updateDay(number){
    setDays(number)
    setUpdateData(true)
  }

  function priceCotation(){
    setPrice(coinsGraphicList.pop())
  }

  useEffect(() => { //ATUALIZA A LISTA DE BITCOINS E O GRÁFICO SEMPRE QUE O USUÁRIO ESCOLHE UM FILTRO

    getListCoins(url(days)).then((data) => {
      setCoinList(data)
    })

    getPriceCoinsGraphic(url(days)).then((dataG) => {
      setCoinsGraphicList(dataG)
    })

    if(updateData){
      setUpdateData(false)
    }

  }, [updateData])

  useEffect(() => {
    getListCoins(url(days))
  }, [])

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar 
      backgroundColor = '#f50d41'
      barStyle = 'light-content'
      />

      <CurrentPrice lastCotation={price}/>
      <HistoryGraphic infoDataGraphic={coinsGraphicList}/>
      <QuotationsList filterDay={updateDay} listTransactions={coinsList} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 10 : 0,
  },
});
