import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/global.css'; // Import Tailwind CSS here
import '@fortawesome/fontawesome-free/css/all.min.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return <div>
        <div className='h-full min-h-fit'>
            <Header />
        </div>
        <Component {...pageProps} />
        <div className='w-full h-full flex justify-end '>
            <Footer />
        </div>

    </div>
}

export default MyApp;
