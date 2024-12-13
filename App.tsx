import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Contact from './components/Contact';

// Main App component
function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Main content wrapper */}
      <main>
        <Header />
        <Services />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Arshdeep Hundal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;