import Header from "@/components/layout/Header";

const WelcomePage: React.FC = () => {
  return (
    <div className="h-full bg-gradient-to-r from-emerald-300 to-orange-200 bg-blue-200">
      <Header />
      <h1 className="text-bold py-4 text-center text-2xl"> Welcome to our site </h1>
    </div>
  );
};

export default WelcomePage;
