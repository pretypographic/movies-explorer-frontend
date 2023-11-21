import { useContext, useEffect, useState } from "react";
import useForm from "../../hooks/useForm";

import Header from "../Header/Header";
import UserContext from "../../contexts/UserContext";

function Profile({
  loggedIn,
  editingSuccessful,
  errorMessage,
  formValues,
  handleLogOut,
  handleEditingUserProfile,
}) {
  const { values, setValues, errors, isValid, handleChange } = useForm(formValues);
  const { name, email } = useContext(UserContext);
  const [editOn, setEditOn] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  function handleEdit() {
    setEditOn(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleEditingUserProfile(values);
  }

  useEffect(() => {
    if (!formValues.name || !formValues.email) {
      setValues({
        name: name,
        email: email,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const hasChanges =
      values.name !== name ||
      values.email !== email;
    setHasChanges(hasChanges);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  useEffect(() => {
    if (errorMessage !== '') {
      setEditOn(true);
    }
  }, [errorMessage])

  return (
    <>
      <Header loggedIn={loggedIn} />

      <main className="profile">
        <h1 className="profile__title">{`Привет, ${name}`}</h1>
        <form
          className={`profile__form ${(!isValid || !hasChanges) && "profile__form_incorrect-input"}`}
          name="profile"
          onSubmit={handleSubmit}>
          <label className="profile__label">Имя
            <input
              className="profile__input"
              name="name"
              placeholder="Ваше имя"
              type="text"
              maxLength="30"
              minLength="2"
              value={values.name ? values.name : ""}
              disabled={!editOn}
              required
              onChange={handleChange} />
            <span className="profile__error-message">{errors.name}</span>
          </label>
          <label className="profile__label">E-mail
            <input
              className="profile__input"
              name="email"
              placeholder="Ваш адрес электронной почты"
              type="email"
              value={values.email ? values.email : ""}
              disabled={!editOn}
              required
              onChange={handleChange} />
            <span className="profile__error-message">{errors.email}</span>
          </label>
          <div className="profile__edit-panel">
            {
              editingSuccessful &&
              <p className="profile__paragraph profile__paragraph_color_green">Профиль успешно обновлен!</p>
            } {
              (editOn && !isValid) &&
              <p className="profile__paragraph profile__paragraph_color_red">{errorMessage}</p>
            } {
              editOn
                ? <button
                  className={`profile__button profile__button_assignment_submit`}
                  type="submit"
                  aria-label="Сохранить изменения."
                  disabled={!isValid || !hasChanges}>Сохранить</button>
                : <div className="profile__edit-panel-group">
                  <button
                    className="profile__button profile__button_assignment_edit"
                    type="button"
                    aria-label="Редактировать профиль."
                    onClick={handleEdit}>Редактировать</button>
                  <button
                    className="profile__button profile__button_assignment_exit"
                    type="button"
                    aria-label="Выйти из аккаунта."
                    onClick={handleLogOut}>Выйти из аккаунта</button>
                </div>
            }
          </div>
        </form>
      </main>
    </>
  )
}

export default Profile;
