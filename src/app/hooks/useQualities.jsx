import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import qualityService from "../services/qualities.service";
import { toast } from "react-toastify";

const QualitiesContext = React.createContext();

export const useQualities = () => {
  return useContext(QualitiesContext);
};

export const QualitiesProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [qualities, setQualities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getQualitiesList();
  }, []);

  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);

  function getUserQualities(userQualities) {
    const userQualitiesArray = [];

    qualities.forEach((quality) => {
      userQualities.forEach((id) => {
        if (quality._id === id) {
          userQualitiesArray.push(quality);
        }
      });
    });

    return userQualitiesArray;
  }

  async function getQualitiesList() {
    try {
      const { content } = await qualityService.get();
      setQualities(content);
      setLoading(false);
    } catch (error) {
      errorCatcher(error);
    }
  }

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  }

  return (
    <QualitiesContext.Provider
      value={{ isLoading, getUserQualities, qualities }}
    >
      {children}
    </QualitiesContext.Provider>
  );
};

QualitiesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
