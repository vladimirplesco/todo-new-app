 export default function Footer() {
      return (
        <footer className="bg-gray-900 text-white py-4 sticky bottom-0 z-50">
          <p className="container text-2xl font-bold max-w-xl mx-auto text-center p-6">&copy; {new Date().getFullYear()} My TODO App</p>
        </footer>
      );
    }