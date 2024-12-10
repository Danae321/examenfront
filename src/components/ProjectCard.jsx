import PropTypes from 'prop-types';

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired
};
