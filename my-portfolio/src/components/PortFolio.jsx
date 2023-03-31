import PortfolioCard from './PortFolioCard';
import nike from '../image/nike.png';

const portfolioData = [
  {
    id: 1,
    title: 'Title test1',
    description: 'Des Test1',
    image: null,
  },
  {
    id: 2,
    title: 'Title test2',
    description: 'Des Test2',
    image: null,
  },
  {
    id: 3,
    title: 'Title test3',
    description: 'Des Test3',
    image: null,
  },
  {
    id: 4,
    title: 'Title test4',
    description: 'How',
    image: nike,
  },
  {
    id: 5,
    title: 'Title test5',
    description: 'Des Test5',
    image: null,
  },
  {
    id: 6,
    title: 'Title test6',
    description: 'Des Test6',
    image: null,
  },
  {
    id: 7,
    title: 'Title test7',
    description: 'Des Test7',
    image: null,
  },
  {
    id: 8,
    title: 'Title test8',
    description: 'Des Test8',
    image: null,
  },
];

const PortFolio = () => {
  return (
    <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center items-center gap-8 py-8">
      {portfolioData.map((data) => (
        <PortfolioCard
          key={data.id}
          title={data.title}
          description={data.description}
          image={data.image}
        />
      ))}
    </ul>
  );
};

export default PortFolio;
