import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const isActive = (path: string) => router.pathname === path;

  return (
    <nav>
      <Link href="/" className={isActive('/') ? 'nav-link active' : 'nav-link'}>Home</Link>
      <Link href="/about" className={isActive('/about') ? 'nav-link active' : 'nav-link'}>About</Link>
      <Link href="/projects" className={isActive('/projects') ? 'nav-link active' : 'nav-link'}>Projects</Link>
      <Link href="/contacts" className={isActive('/contacts') ? 'nav-link active' : 'nav-link'}>Contacts</Link>
    </nav>
  );
} 