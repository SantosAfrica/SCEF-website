import Link from 'next/link';

const Header: React.FC = () => (
    <header className="px-5">
        <nav className='flex gap-20'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/donate">Donate</Link>
        </nav>
    </header>
);

export default Header;
