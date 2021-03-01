import '../styles/globals.scss';
// import { useReducer ,useEffect } from "react";
// import { reducer, initialState } from "state/reducer";
// import Context from "context";
// import { setUser } from "state/actions";

function MyApp({ Component, pageProps }) {
// const [state, dispatch] = useReducer(reducer, initialState)
  return (
  //  <Context.Provider
  //     value={{
  //       state,
  //       dispatch,
  //     }}
  //   >
      <Component {...pageProps} />
    // </Context.Provider>
  );
}

export default MyApp;
