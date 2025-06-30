export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <p className="mb-4">Feel free to contact me via email or connect on social media.</p>
      <a href="mailto:sprihagogoi27@gmail.com" className="text-blue-600 hover:underline">
        sprihagogoi27@gmail.com
      </a>
      <div className="mt-6 flex justify-center space-x-6">
        <a href="https://www.linkedin.com/in/spriha-gogoi-414380359" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
          LinkedIn
        </a>
        <a href="https://github.com/riihaaa" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black">
          GitHub
        </a>
      </div>
    </section>
  );
}
