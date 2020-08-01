import App from 'next/app';
import TagManager from 'react-gtm-module';

import '../styles/styles.css';

const tagManagerArgs = {
  gtmId: 'GTM-WPMMMWF',
};

class MyApp extends App {
  componentDidMount() {
    if (typeof window === 'object') {
      TagManager.initialize(tagManagerArgs);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <h1>Next JS GTM Test App!</h1>
        <Component {...pageProps} />
      </div>
    );
  }
}

export default MyApp;
