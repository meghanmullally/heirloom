import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-3">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Heirloom</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
            <Link href="/recipes">
                <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Recipes
                </a>
            </Link>
        </div>
        <div>
            <Link href="/signin">
                <a className="inline-block text-sm px-2 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                    Sign In
                </a>
            </Link>
            <Link href="/signup">
                <a className="ml-2 inline-block text-sm px-2 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                    Sign Up
                </a>
            </Link>
        </div>
      </div>
    </nav>
  );
}
