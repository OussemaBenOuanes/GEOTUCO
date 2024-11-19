"use client";

const LandingPage: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <header className="bg-blue-500 text-white py-4 px-8 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Website</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="p-8 text-center">
        <section id="about" className="my-8 p-6 border rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-700">Welcome to our website! We provide amazing services to our customers.</p>
        </section>
        <section id="services" className="my-8 p-6 border rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <p className="text-gray-700">We specialize in web development, design, and much more.</p>
        </section>
        <section id="contact" className="my-8 p-6 border rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700">Email us at contact@mywebsite.com for inquiries.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4 border-t">
        <p className="text-gray-500">&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
