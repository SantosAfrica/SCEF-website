import Link from 'next/link';

const Header: React.FC = () => (
    <header className="bg-white  text-black  py-2 h-24 px-20 flex justify-between items-center w-full" >
        <div>
            <img src="/images/SCEF.svg" alt="SCEF Logo" />
        </div>
        <nav className='pl-4 flex gap-4 font-poppins'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/Services">Our Services</Link>
            <Link href="/GetInvolved">Get Involved</Link>
            <Link href="/News">news and Update</Link>
        </nav>
        <div className='flex gap-4'>
            <button className='w-40 h-12 text-sm border-2 flex items-center justify-center gap-2 border-liteblue rounded-full  text-liteblue'><img src="/images/donate.png" alt="Donate symbol" />Donate</button>
            <button className='w-40 h-12 text-sm border-2 flex items-center justify-center gap-2 border-liteblue rounded-full text-white bg-liteblue'><img src="/images/partnerWithUs.png" alt="Donate symbol" />Partner with us</button>
        </div>
    </header>
);

export default Header;
