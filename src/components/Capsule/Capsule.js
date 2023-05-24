import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Capsule(props) {
  const {item} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.label} allowFontScaling={false}>
        {item.tag}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgba(247, 248, 250, 1)',
    borderColor: 'rgba(206, 211, 222, 1)',
    borderWidth: 1,
    height: 25,
    borderRadius: 12,
    marginLeft: 5,
    marginTop: 10,
  },
  label: {
    paddingHorizontal: 10,
    marginTop: 1,
  },
});
