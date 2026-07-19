const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array.from({ length: 12 }).map((_, i) => (
        <div className="shimmer-card" key={i}></div>
      ))}
    </div>
  );
};

export default Shimmer;

