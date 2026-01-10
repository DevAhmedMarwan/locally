import { Search } from "lucide-react"
import Link from "next/link"

const Header = () => {
    return (
        <div>
            {/* HEADER */}
            <header className="mx-auto bg-blue-600 h-[64px] flex items-center gap-4 !px-4 lg:!px-35">
                <div>
                    <img
                        className="w-[78px] h-[40px] object-contain"
                        src="https://locallyeg.com/locally-logo.png"
                        alt="logo"
                    />
                </div>
                <div>
                    <nav className="flex gap-10 !ml-8">
                        <Link href="/women" className="!text-white text-lg font-semibold">
                            Women
                        </Link>
                        <Link href="/men" className="!text-white text-lg font-semibold">
                            Men
                        </Link>
                        <Link href="/kids" className="!text-white text-lg font-semibold">
                            Kids
                        </Link>
                    </nav>
                </div>
                <div>
                    <div className="relative flex items-center">
                        <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />

                        <input
                            type="text"
                            placeholder="Search"
                            className="w-90 border rounded-md !pl-8 !pr-2 !py-1.5"
                        />
                    </div>
                </div>
            </header>

            {/* PAGES */}
        </div>
    )
}

export default Header