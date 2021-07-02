import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          html,
          body {
            height: 100%;
            width: 100%;
            margin: 0;
          }
          *,
          *:after,
          *:before {
            box-sizing: border-box;
          }
          body {
            font-family: sans-serif;
            font-size: 1rem;
            margin: 0;
          }
        `}
      </style>
    </>
  );
}
