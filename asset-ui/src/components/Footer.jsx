export default function Footer(){
  return(
    <footer className="bg-primary text-white text-center py-3 mt-4">
      <div>
        Asset Management Dashboard © {new Date().getFullYear()} | Built with React & Spring Boot
      </div>
    </footer>
  );
}
