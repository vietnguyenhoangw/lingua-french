import App, {AppInitialProps} from "next/app";
import {Geist, Geist_Mono} from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

class MyApp extends App<AppInitialProps> {
    state = {
        routerRedirecting: false,
    };

    render() {
        const {Component, pageProps} = this.props;

        return (
            <div
                className={`${geistSans.className} ${geistMono.className} font-[family-name:var(--font-geist-sans)]`}>
                <Component {...pageProps} />
            </div>
        );
    }
}

export default MyApp;
