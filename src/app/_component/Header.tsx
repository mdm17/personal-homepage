import Link from './NoScrollLink'
// import DarkModeToggle from './DarkModeToggle'
import Navigation from './Navigation'

const Header = (): JSX.Element => (
    <header
        className="site-header fixed top-0 z-50 w-full text-starlight"
    >
        <div className="flex h-16 w-full items-center justify-between px-6 sm:h-20 sm:px-10 lg:px-16">
        <Link href="/">
            <p className="font-display text-lg tracking-tight">
                <span className="sm:hidden">MDM</span>
                <span className="hidden sm:inline">M Dicky Maulana</span>
            </p>
        </Link>
        <div className="flex flex-row items-center">
            <Navigation />
        </div>
        </div>
    </header>
)

export default Header