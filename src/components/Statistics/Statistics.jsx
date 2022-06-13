import PropTypes from "prop-types";
export default function Statistics(props) {
  const { title = "" } = props;
  const loads = props.stats;
  return (
    <section className="statistics">
      {title !== "" && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {loads.map(load => {
          return (
            <li className="item" key={load.id}>
              <span className="label">{load.label}</span>
              <span className="percentage">{load.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
