import { Title } from "../title/title";

 export default function Header() {
      return (
        <header className="bg-gray-900 text-white py-4 sticky top-0 z-50">
          <div className="container mx-auto px-4 flex justify-between items-center">
          <nav>
            {/* Your navigation links */}
          </nav>
          <h1 className="text-2xl font-bold max-w-xl mx-auto text-center">My TODO App</h1>
          </div>
        </header>
      );
    }