import Link from 'next/link';


export default function Navbar(){
    return(
        <nav className='navBar'>
              <Link href="/Auth">
                <a>Login</a>
              </Link>
              <Link href="/">
                <a>Offers</a>
              </Link>
            <p>about</p>
        </nav>
    )
}