const Feature = ({ feature }) => {
  const { title, description } = feature;
  return (
    <div>
      <article className="blue-shadow">
        <header>
          <h1 className="text-xl font-bold">{title}</h1>
        </header>
        <p>{description}</p>
      </article>
    </div>
  );
};

export default Feature;
