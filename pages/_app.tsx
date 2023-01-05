import type {AppProps} from "next/app";
import "@styles/main.scss";
import {setupStore, wrapper} from "@core/store";
import {Provider} from "react-redux";
import HeaderComponent from "@components/HeaderComponent/HeaderComponenet";

const AppPage = ({Component, pageProps}: AppProps) => {

    let storeInstance = setupStore();

    const {
        store,
        props
    } = wrapper.useWrappedStore(storeInstance);

    return (
        <Provider {...props} store={store}>
            <HeaderComponent/>
            <Component {...pageProps} />
        </Provider>
    )
}

export default AppPage;
