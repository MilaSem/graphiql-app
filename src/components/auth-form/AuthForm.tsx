import { type FC, useEffect, useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth, logIn } from '../../firebase';
import { useForm, type FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaAuth } from '../../yup/Schema';
import { Loader } from '../../components/loader/Loader';
import './AuthForm.scss';
import React from 'react';
import { LangContext } from '../../locale/langContext';
import { type ErrorsKeys } from '../../model/interfaces';
import { Router } from '../../model/enums';

export const AuthForm: FC = () => {
  const { dictionary } = useContext(LangContext);
  const [, loading] = useAuthState(auth);
  let customError = '';
  if (localStorage.getItem('error')) customError = 'invalid login or password';

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({ resolver: yupResolver(schemaAuth), mode: 'all' });

  const onSubmit = async (data: FieldValues): Promise<void> => {
    await logIn(data.email, data.password);
    reset();
  };

  useEffect(() => {
    localStorage.removeItem('error');
    customError = '';
  }, []);

  return (
    <>
      {loading
        ? (
        <Loader />
        )
        : (
        <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="auth-header">{dictionary.auth.signIn}</h3>

          <input
            className="auth-input"
            type="text"
            placeholder={dictionary.placeholders.email}
            {...register('email')}
          ></input>
          <div className="error-string">
            {errors?.email?.message && (
              <p>
                {dictionary.errors[errors.email.message as keyof ErrorsKeys] ||
                  'Error'}
              </p>
            )}
          </div>
          <input
            className="auth-input"
            type="password"
            role="textbox"
            placeholder={dictionary.placeholders.password}
            {...register('password')}
          ></input>
          <div className="error-string">
            {errors?.password?.message && (
              <p>
                {dictionary.errors[
                  errors.password.message as keyof ErrorsKeys
                ] ||
                  errors.password.message ||
                  dictionary.errors.error}
              </p>
            )}
          </div>
          <div className="buttons-container">
            <div>
              <Link to={Router.signUp}>{dictionary.auth.signUp}</Link>
              <p className="auth-description">
                {dictionary.auth.ifNotRegister}
              </p>
            </div>
            <button type="submit" className="submit-button">
              {dictionary.auth.logIn}
            </button>
          </div>
          <div className="error-string">{customError}</div>
        </form>
        )}
    </>
  );
};
