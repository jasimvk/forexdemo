// TradingViewWidget.jsx
/* eslint-disable */
import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_407e0') && 'TradingView' in window) {
          new window.TradingView.widget({
            // autosize: true,
            width: "'100%",
            height:'100%', 
            symbol: "XAUUSD", 
            interval: "60",
            timezone: "Asia/Dubai",
            theme: "light",
            style: "1",
            locale: "en", 
            enable_publishing: false,
            hide_legend: true,
            allow_symbol_change: false,
            // hide_volume: true,
            container_id: "tradingview_407e0",
            overrides: {
              "mainSeriesProperties.currency_code": "AED"
            }
          });
        }
      }
    },
    []
  );

  return (
    
    <div className='tradingview-widget-container'   >
      
      <div id='tradingview_407e0' />
       
    </div>
  );
}
