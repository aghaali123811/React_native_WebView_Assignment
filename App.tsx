import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import { Alert, Button, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import Header from './src/components/Headers/Header';
import Capsule from './src/components/Capsule/Capsule';
import colors from './src/common/colors';
import Constant from './src/common/constants';
import PostItem from './src/components/Post/PostItem';


// const newLocal = `

//        <button onClick={()=>window.ReactNativeWebView.postMessage('Hello!')}>Click Me!</button>
//   `;

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
    <View style={{flex:1,width:'100%',height:'100%',backgroundColor:'#fff',padding:20}}>

<Header />
 <PostItem />

<View style={{flexDirection:'row',flexWrap:'wrap',marginTop:10}}>
{Constant.capulseDummyData.map((item)=>{
  return(
    <Capsule item={item} />
  )
})}
</View>

<WebView
  // source={{ uri: 'https://reactnative.dev' }}
  source={{html: html}}
  // injectedJavaScript={INJECTED_JAVASCRIPT}
  injectedJavaScript={webViewScript}
  onTouchEnd={()=>alert('hello')}
  // onMessage={(event) => console.log(event)}
/>

{/* <WebView
                   source={{html: html}}
                   originWhitelist={['*']}
                    javaScriptEnabled={true}
                   onMessage={(event)=>{
                       let message  = event.nativeEvent.data;
                       console.log('message', message);
                   }}
                   injectedJavaScript='window.ReactNativeWebView.postMessage("Hello from webView")'
                   onError={(e) => {
                       console.warn('error occured', e)
                   }}/> */}

</View>
  )
}

export default App;






















// const App = () => {
//   const [message, setMessage] = useState('');

//   // Function to handle messages from JavaScript
//   const handleMessage = event => {
//     const messageFromJS = event.nativeEvent.data;
//     setMessage(messageFromJS);
//   };

//   const webViewScript = `
//     setTimeout(function() { 
//       window.ReactNativeWebView.postMessage('Hello!'); 
//     }, 2500);
//     true; // note: this is required, or you'll sometimes get silent failures
//   `;

//   const injectedJavascript = `(function() {
//     window.postMessage = function(data) {
//       window.ReactNativeWebView.postMessage(data);
//     };
//   })()`;
  
//   return (
//     <>
//    <WebView
//       source={{
//         uri: `https://google.com`,
//       }}
//       automaticallyAdjustContentInsets={false}
//       scrollEnabled={false}
//       onMessage={(event) => {
//         alert('message received')
//         // do something with `event.nativeEvent.data`
//       }}
//       javaScriptEnabled={true}
//       injectedJavaScript={webViewScript}
//       // injectedJavaScript={injectedJavascript}
//       domStorageEnabled={true}
//       style={{ width: "100%", height: 500 }}
//     />
//     </>
//   );
// };

// export default App;
















// import React, { useState } from 'react';
// import { WebView } from 'react-native-webview';
// import { Button,View } from 'react-native';

// export default class Test extends React.Component{
//   constructor(props){
//       super(props);
//       this.state={
//           html:''
//       }
//   }
//   componentWillMount(){
//       this.setState({
//           html : `<html>
//   <head>
//   <script>
//   window.postMessage("Messga from webView")
//   </script>
//   </head>
//   <body><h1>Hello from webView</h1></body>
//   </html>`
//       })
//   }

  // render(){
//       return (
//           <View style={{flex: 1}}>
//               <WebView
//                   // ref={(reff) => {
//                   //     this.webView = reff;
//                   // }}
//                   source={{html: this.state.html}}
//                   // style={[styles.flex1, styles.padding5]}
//                   onMessage={(event)=>{
//                       let message  = event.nativeEvent.data;
//                       console.log('message', message);
//                       /* event.nativeEvent.data must be string, i.e. window.postMessage
//                       should send only string.
//                       * */
//                   }}
//                   onNavigationStateChange={(evt)=>{}}
//                   onError={(e) => {
//                       console.warn('error occured', e)
//                   }}/>
//           </View>
//       )
//   }
// }
