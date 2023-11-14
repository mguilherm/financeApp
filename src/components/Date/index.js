import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const DateComparison = ({date}) => {
  const [timeDifference, setTimeDifference] = useState('');
 
  useEffect(() => {
    const currentDate = new Date();
    const contentDate = new Date(date);

    const timeDiffInMilliseconds = currentDate - contentDate;
    const seconds = Math.floor(timeDiffInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    let differenceText = '';
    if(timeDiffInMilliseconds < 0) {
      differenceText = ``;
    } else if(years > 0) {
      differenceText = `${years} ${years === 1 ? 'ano' : 'anos'}`;
    } else if (months > 0) {
      differenceText = `${months} ${months === 1 ? 'mês' : 'meses'}`;
    } else if (weeks > 0) {
      differenceText = `${weeks} ${weeks === 1 ? 'semana' : 'semanas'}`;
    } else if (days > 0) {
      differenceText = `${days} ${days === 1 ? 'dia' : 'dias'}`;
    } else if (hours > 0) {
      differenceText = `${hours} ${hours === 1 ? 'hora' : 'horas'}`;
    } else if (minutes > 0) {
      differenceText = `${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`;
    } else {
      differenceText = `${seconds} ${seconds === 1 ? 'segundo' : 'segundos'}`;
    }

    setTimeDifference(differenceText);
  }, [date]);

  return (
    <View>
      <Text style={Styles.date}>{timeDifference}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  date:{
    marginStart: 14,
    fontSize: 16,
  }
})

export default DateComparison;
