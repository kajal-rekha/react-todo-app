const Footer = () => {
  return (
    <footer className="bg-gray-900 container mx-auto text-center p-10 text-sm text-teal-600 border-t border-dashed border-teal-900">
      <p>&copy; {new Date().getFullYear()} Todo App All rights reserved</p>
    </footer>
  );
};

export default Footer;
