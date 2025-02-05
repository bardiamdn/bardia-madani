const Footer: React.FC = () => {
  return (
    <footer className="w-full h-screen bg-white">
      <div className="">
        <p>
          &copy; {new Date().getFullYear()} Bardia Madani. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
