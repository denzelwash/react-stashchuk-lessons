export const Header = ({ className }) => {
  return (
    <header className={"bg-blue-300 py-6 " + className}>
      <div className="container mx-auto px-4">
        <h1 className="text-center text-2xl font-medium">Book Library App</h1>
      </div>
    </header>
  );
};
