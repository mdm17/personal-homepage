import Link from './NoScrollLink'
import DarkModeToggle from './DarkModeToggle'
import Navigation from './Navigation'

const Header = (): JSX.Element => (
    <header
        className="
        w-full fixed bg-transparent flex flex-row justify-between items-center
        h-16 md:h-20 z-50
        px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
        dark:bg-gray-800
        text-black dark:text-white
    "
    >
        <Link href="/">
            <p>
                <span className="block sm:hidden">MDM</span>
                <span className="hidden sm:block">M Dicky Maulana</span>
            </p>
        </Link>
        <div className="flex flex-row items-center">
            <Navigation />
            <DarkModeToggle />
        </div>
    </header>
)

export default Header