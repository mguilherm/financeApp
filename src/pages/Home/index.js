import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

import { StyleSheet, Text, View, FlatList } from 'react-native';
import DateComparison from '../../components/Date';

const list = [
  {
    id: 1,
    label: 'Conta de Luz',
    value: '300,90',
    date: '17/09/2023',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '2.500,00',
    date: '26/07/2023',
    type: 1 // receitas
  },
  {
    id: 3,
    label: 'Pix Cliente Y',
    value: '450,00',
    date: '03/07/2023',
    type: 1 // receitas
  },
]

const content = {
  date: '2022-01-9T21:13:25.763Z',
} ;

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name={'Marcos Silva'}/>
      <Balance expenses={'-300,90'} received={'2.950,00'}/>

      <Text style={styles.title}>Últimas movimentações</Text>
      <DateComparison date={content.date}/>
      <Actions/>
      <FlatList 
        data={list}  
        style={styles.list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({item}) => <Movements data={item}/> }
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  },

});
