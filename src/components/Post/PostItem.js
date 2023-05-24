import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import ImagePath from '../../common/imagePath';
import colors from '../../common/colors';

export default function PostItem(props) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <Image source={ImagePath.profileImage} style={styles.img} />
          <View style={styles.margin}>
            <View style={styles.row}>
              <Text allowFontScaling={false} style={styles.name}>
                안녕 나 응애{' '}
              </Text>
              <Image
                source={ImagePath.greenCircle}
                style={styles.greenCircle}
              />
              <Text allowFontScaling={false} style={styles.tag}>
                1일전
              </Text>
            </View>
            <Text allowFontScaling={false} style={styles.height}>
              165cm - 53Kg
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.btnContainer}>
          <Text allowFontScaling={false} style={styles.label}>
            팔로우
          </Text>
        </TouchableOpacity>
      </View>

      <Text allowFontScaling={false} style={styles.descriptionOne}>
        지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?
      </Text>

      <Text allowFontScaling={false} style={styles.description}>
        지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~혹시
        어떤 상품이 제일 괜찮았어? {'\n'}
        {'\n'}후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이
        제일 재밌었다던데 맞아??? {'\n'}
        {'\n'}올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가
        아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에 있었던
        팝들 있으면 어땠는지 후기 좀 공유해주라~~!
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  margin: {
    marginLeft: 10,
    marginTop: 4,
  },
  name: {
    color: colors.darkBlack,
    fontSize: 14,
    fontWeight: 'bold',
  },
  greenCircle: {
    width: 17,
    height: 17,
    marginHorizontal: 5,
  },
  description: {
    color: colors.darkBlack,
    marginTop: 20,
    fontSize: 14,
  },
  descriptionOne: {
    color: colors.darkBlack,
    marginTop: 20,
    fontSize: 14,
    fontWeight: 'bold',
  },
  btnContainer: {
    height: 25,
    backgroundColor: 'rgba(1, 185, 159, 1)',
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  height: {
    color: colors.lightGrey,
  },
  tag: {
    color: colors.lightGrey,
    fontSize: 10,
    marginTop: 2,
  },
  label: {
    color: colors.while,
    fontSize: 12,
    marginTop: 4,
  },
});
