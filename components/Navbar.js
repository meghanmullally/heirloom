import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="bg-gray-100 font-sans w-full m-0 mb-2">
    <div className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div>
            <Link href="/">
              <a><span className="font-semibold text-xl tracking-tight">Heirloom</span></a>
            </Link>
          </div>
  
          <div className="hidden sm:flex sm:items-center">
            <Link href="/recipes">
              <a className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Recipe</a>
            </Link>
            <Link href="/recipes">
              <a className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Recipe</a>
            </Link>
            <Link href="/recipes">
              <a className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Recipe</a>
            </Link>
            <Link href="/recipes">
              <a className="text-gray-800 text-sm font-semibold hover:text-purple-600">Recipe</a>
            </Link>
          </div>
  
          <div className="hidden sm:flex sm:items-center">
            <Link href="signin">
              <a  className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Sign in</a>
            </Link>
            <Link href="signup">  
              <a className="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600">Sign up</a>
            </Link>
          </div>
  
          <div className="sm:hidden cursor-pointer">
            <span className="font-semibold text-xl tracking-tight">Heirloom</span>
          </div>
        </div>
        
        <div className="block sm:hidden bg-white border-t-2 py-2">
          <div className="flex flex-col">
            <Link href="/recipes">
              <a className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Recipe</a>
            </Link>
            <Link href="/recipes">
              <a className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Recipe</a>
            </Link>
            <Link href="/recipes">
              <a className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Recipe</a>
            </Link>
            <Link href="/recipes">
              <a className="text-gray-800 text-sm font-semibold hover:text-purple-600">Recipe</a>
            </Link>
            <div className="flex justify-between items-center border-t-2 pt-2">
              <Link href="signin">
                <a  className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Sign in</a>
              </Link>
              <Link href="signup">  
                <a className="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600">Sign up</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}


