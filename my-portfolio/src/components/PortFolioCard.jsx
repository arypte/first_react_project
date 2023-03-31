const PortFolioCard = ({ title, description, image }) => {
  return (
    <li className="bg-purple-300 w-60 h-72 rounded-xl">
      <div className="bg-yellow-100 w-full h-1/2 object-cover rounded-t-xl">
        {image && (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        )}
      </div>
      <div className="text-xl font-bold mt-2 mx-2">{title}</div>
      <div className="mt-2 mx-2">{description}</div>
    </li>
  );
};
export default PortFolioCard;
