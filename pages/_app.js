import { Component } from 'react/cjs/react.production.min'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async ({Comment, ctx}) =>{
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  if(Object.keys(pageProps).length >0){
    return(pageProps);
  }
  else{
    return {};
  }
};

export default MyApp
