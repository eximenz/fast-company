import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
import { useQualities } from "../../../hooks/useQualities";

const QualitiesList = ({ userQualities }) => {
  const { isLoading, getUserQualities } = useQualities();
  const useryQualitiesArray = getUserQualities(userQualities);
  if (!isLoading) {
    return (
      <>
        {useryQualitiesArray.map((quality) => (
          <Quality key={quality._id} {...quality} />
        ))}
      </>
    );
  } else return "Loading ...";
};

QualitiesList.propTypes = {
  userQualities: PropTypes.array.isRequired,
};

export default QualitiesList;
