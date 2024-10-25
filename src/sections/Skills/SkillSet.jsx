const SkillSet = ({ check, skill }) => {
  return (
    <span>
      <img src={check} alt={check} />
      <p>{skill}</p>
    </span>
  );
};

export default SkillSet;
