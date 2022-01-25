import React, { useState, useEffect } from "react";
import TextField from "../../common/form/textField";
import { validator } from "../../../utils/validator";
import api from "../../../api";
import SelectField from "../../common/form/selectField";
// import RadioField from "../../common/form/radio.Field";
// import MultySelectField from "../../common/form/multySelectField";
// import CheckBoxField from "../../common/form/checkBoxField";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const Edit = ({ id }) => {
  const [userInfo, setUserInfo] = useState();
  const history = useHistory();
  const [data, setData] = useState({
    name: "",
    email: "",
    profession: "",
    sex: "male",
    qualities: [],
    licence: false,
  });
  const [, setQualities] = useState({});
  const [errors, setErrors] = useState({});
  const [professions, setProfession] = useState();

  useEffect(() => {
    api.users.getById(id).then((data) => setUserInfo(data));
    api.professions.fetchAll().then((data) => setProfession(data));
    api.qualities.fetchAll().then((data) => setQualities(data));
  }, []);

  useEffect(() => {
    if (userInfo) {
      // console.log(userInfo.profession.name);
      setData({
        name: userInfo.name,
        email: userInfo.email,
        profession: userInfo.profession,
        sex: "male",
        qualities: [],
        licence: false,
      });
    }
  }, [userInfo]);

  const handleChange = (target) => {
    // else {
    //   setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    // }
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    // if (target.name === "profession") {
    //   Object.values(professions).find((profession) => {
    //     return profession._id === target.value;
    //   });
    //   //  {
    //   setData((prevState) => ({
    //     ...prevState,
    //     [target.name]: professions,
    //   }));
    //   console.log(professions);

    // }
  };

  const handleProfessionChange = ({ value }) => {
    const profession = Object.values(professions).find((prof) => {
      return value === prof._id;
    });
    if (profession === undefined) {
      return;
    }
    setData({ ...data, profession });
  };

  const validatorConfig = {
    name: {
      isRequired: { message: "Имя обязательно для заполнения" },
    },
    email: {
      isRequired: { message: "Электронная почта обязательна для заполнения" },
      isEmail: { message: "Email введен неккоректно" },
    },
    profession: {
      isRequired: { message: "Обязательно выберите вашу профессию" },
    },
    // licence: {
    //   isRequired: {
    //     message:
    //       "Вы не можете использовать наш сервис без лицензионного соглашения",
    //   },
    // },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    api.users.update(id, data).then((user) => {
      setData(user);
      history.replace(`/users/${id}`);
    });
    // api.users.update(id, data);
    // history.replace(`/users/${id}`);
  };

  if (userInfo) {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2 shadow p-4">
            <form onSubmit={handleSubmit}>
              <TextField
                label="Имя"
                name="name"
                value={data.name}
                onChange={handleChange}
                error={errors.name}
              />
              <TextField
                label="Электронная почта"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
              />
              <SelectField
                onChange={handleProfessionChange}
                value={data.profession}
                defaultOption={"Choose..."}
                options={professions}
                error={errors.profession}
                label="Выберите вашу проффесию"
                name="profession"
              />
              {/* <RadioField
          options={[
            { name: "Male", value: "male" },
            { name: "Female", value: "female" },
            { name: "Other", value: "other" },
          ]}
          value={data.sex}
          name="sex"
          onChange={handleChange}
          label="Выберите ваш пол"
        />
        <MultySelectField
          options={qualities}
          onChange={handleChange}
          defaultValue={data.qualities}
          name="qualities"
          label="Выберите ваши качества"
        />
        <CheckBoxField
          value={data.licence}
          onChange={handleChange}
          name="licence"
          error={errors.licence}
        >
          Подтвердить <a>лицензионное соглащение</a>
        </CheckBoxField> */}
              <button
                type="submit"
                disabled={!isValid}
                className="btn btn-primary w-100 mx-auto"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  return "loading...";
};

Edit.propTypes = {
  id: PropTypes.string,
};

export default Edit;
