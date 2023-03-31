import PortfolioCard from './PortFolioCard';

const PortFolio = () => {
  return (
    <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center items-center gap-8 py-8">
      {/* margin padding */}
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
    </ul>
  );
};
export default PortFolio;
