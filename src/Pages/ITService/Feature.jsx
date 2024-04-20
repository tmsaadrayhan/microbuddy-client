const Feature = ({feature}) => {
  const {title, description} =feature;
  return (
    <div>
      <div className="blue-shadow">
        <h1 className="text-xl font-bold">{title}</h1>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Feature;
