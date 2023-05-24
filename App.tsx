import React, {useState} from 'react';
import {WebView} from 'react-native-webview';
import {StyleSheet, View} from 'react-native';
import Header from './src/components/Headers/Header';
import Capsule from './src/components/Capsule/Capsule';
import Constant from './src/common/constants';
import PostItem from './src/components/Post/PostItem';
import colors from './src/common/colors';

const newLocal = `
  <script>
  window.postMessage("Sending data from WebView");
</script>
<html>
<button title="Native Alert" onClick={()=>alert('helloooooo')}/>
</html>
  `;

const App = () => {
  const [html, setHtml] = useState(newLocal);

  const webViewScript = `
    setTimeout(function() { 
      window.ReactNativeWebView.postMessage('Hello!'); 
    }, 2500);
    true; // note: this is required, or you'll sometimes get silent failures
  `;

  const INJECTED_JAVASCRIPT = `(function() {
    window.ReactNativeWebView.postMessage(JSON.stringify(window.location));
})();`;
  return (
    <View style={styles.container}>
      <Header />
      <PostItem />

      <View style={styles.subContainer}>
        {Constant.capulseDummyData.map(item => {
          return <Capsule item={item} />;
        })}
      </View>

      <WebView
        source={{html: html}}
        injectedJavaScript={webViewScript}
        onTouchEnd={() => alert('hello')}
      />
      <View style={styles.subContainer}>
        {Constant.capulseDummyData.map(item => {
          return <Capsule item={item} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: colors.while,
    padding: 20,
  },
  subContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
});

export default App;
