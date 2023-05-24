import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import ImagePath from '../../common/imagePath';
import colors from '../../common/colors';

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Image source={ImagePath.backArrow} style={styles.backIcon} />
      <Text allowFontScaling={false} style={styles.title}>
        자유톡
      </Text>
      <Image source={ImagePath.bell} style={styles.notificationIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  backIcon: {
    width: 15,
    height: 15,
  },
  title: {
    color: colors.black,
    fontSize: 16,
  },
  notificationIcon: {
    width: 20,
    height: 20,
  },
});
