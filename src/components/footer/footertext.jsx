const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between text-center">
        <div className="flex items-center space-x-4 justify-center"> 
          <a href="#" className="text-blue-400 hover:text-blue-600">Indonesia</a>
          <a href="Programming" className="text-blue-400 hover:text-blue-600">Programmer</a>
          <a href="covid" className="text-blue-400 hover:text-blue-600">Covid</a>
        </div>
      </div>
      <p className="text-xl font-bold text-center">Copyright &copy; 2023 Thaha - Usamah - Bagas</p>
      <div className="mt-4">
        <img src="https://img.beritasatu.com/investor/1637569776.jpg" alt="Your Logo" className="w-20 h-20 mx-auto" />
      </div>
    </footer>
  );
};

export default Footer;
