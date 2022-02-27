import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { validator } from "../../../utils/validator";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";
import BackHistoryButton from "../../common/backButton";
import { useQualities } from "../../../hooks/useQualities";
import { useProfessions } from "../../../hooks/useProfession";
import { useUser } from "../../../hooks/useUsers";
// import { useAuth } from "../../../hooks/useAuth";
const EditUserPage = () => {
    const { userId } = useParams();
    // const { currentUser } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    // const history = useHistory();
    const [data, setData] = useState({
        name: "",
        email: "",
        profession: "",
        sex: "",
        qualities: []
    });
    const { professions } = useProfessions();
    const professionsList = professions.map((p) => ({
        label: p.name,
        value: p._id
    }));

    const { qualities } = useQualities();
    const qualitiesList = qualities.map((q) => ({
        label: q.name,
        value: q._id
    }));
    const [errors, setErrors] = useState({});
    const { getUserById } = useUser();

    // const getProfessionById = (id) => {
    //     for (const prof in professions) {
    //         const profData = professions[prof];
    //         if (profData._id === id) return profData;
    //     }
    // };
    // const getQualities = (elements) => {
    //     const qualitiesArray = [];
    //     for (const elem of elements) {
    //         for (const quality in qualities) {
    //             if (elem.value === qualities[quality]._id) {
    //                 qualitiesArray.push(qualities[quality]);
    //             }
    //         }
    //     }
    //     return qualitiesArray;
    // };

    const transformData = (useData) => {
        const userQual = [];
        qualitiesList.forEach((qual) => {
            useData.forEach((q) => {
                if (qual.value === q) {
                    userQual.push(qual);
                }
            });
        });
        return userQual;
    };

    useEffect(() => {
        try {
            const {
                qualities: userQualities,
                profession,
                ...rest
            } = getUserById(userId);
            setData(() => ({
                ...rest,
                profession: profession,
                qualities: transformData(userQualities)
            }));
        } catch (error) {
            errorCatcher(error);
        } finally {
            setIsLoading(true);
        }
    }, [qualities, professions]);

    useEffect(() => {
        if (data.name) setIsLoading(false);
    }, [data]);

    function errorCatcher(error) {
        const { message } = error.response.data;
        setErrors(message);
    }

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        name: {
            isRequired: {
                message: "Введите ваше имя"
            }
        },
        qualities: {
            isRequired: {
                message: "Качества обязательны для заполнения"
            }
        }
    };
    useEffect(() => validate(), [data]);
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        // const { profession, qualities } = data;
        // api.users
        //     .update(userId, {
        //         ...data,
        //         profession: getProfessionById(profession),
        //         qualities: getQualities(qualities)
        //     })
        //     .then((data) => history.push(`/users/${data._id}`));
        console.log(data);
    };

    return (
        <div className="container mt-5">
            <BackHistoryButton />
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {!isLoading ? (
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
                                label="Выбери свою профессию"
                                defaultOption="Choose..."
                                options={professionsList}
                                name="profession"
                                onChange={handleChange}
                                value={data.profession}
                                error={errors.profession}
                            />
                            <RadioField
                                options={[
                                    { name: "Male", value: "male" },
                                    { name: "Female", value: "female" },
                                    { name: "Other", value: "other" }
                                ]}
                                value={data.sex}
                                name="sex"
                                onChange={handleChange}
                                label="Выберите ваш пол"
                            />
                            <MultiSelectField
                                defaultValue={data.qualities}
                                options={qualitiesList}
                                onChange={handleChange}
                                name="qualities"
                                label="Выберите ваши качества"
                                error={errors.qualities}
                            />
                            <button
                                type="submit"
                                disabled={!isValid}
                                className="btn btn-primary w-100 mx-auto"
                            >
                                Обновить
                            </button>
                        </form>
                    ) : (
                        "Loading..."
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditUserPage;
