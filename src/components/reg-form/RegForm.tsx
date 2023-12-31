import { useContext, type FC } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth, registerUser } from '../../firebase';
import { useForm, type FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaReg } from '../../yup/Schema';
import { Loader } from '../../components/loader/Loader';
import React from 'react';
import { LangContext } from '../../locale/langContext';
import { type ErrorsKeys } from '../../model/interfaces';

export const RegForm: FC = () => {
  const [, loading] = useAuthState(auth);
  const { dictionary } = useContext(LangContext);

  const {
    register,
    formState: { errors, isValid },
    reset,
    handleSubmit,
  } = useForm({ resolver: yupResolver(schemaReg), mode: 'all' });

  const onSubmit = async (data: FieldValues): Promise<void> => {
    await registerUser(data.name, data.email, data.password);
    reset();
  };

  return (
    <>
      {loading
        ? (
        <Loader />
        )
        : (
        <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="auth-header">{dictionary.auth.registration}</h3>
          <input
            className="auth-input"
            type="text"
            placeholder={dictionary.placeholders.name}
            {...register('name')}
          ></input>
          <div className="error-string">
            {errors?.name?.message && (
              <p>
                {dictionary.errors[errors.name.message as keyof ErrorsKeys] ??
                  'Error'}
              </p>
            )}
          </div>
          <input
            className="auth-input"
            type="text"
            placeholder={dictionary.placeholders.email}
            {...register('email')}
          ></input>
          <div className="error-string">
            {errors?.email?.message && (
              <p>{dictionary.errors[errors.email.message] ?? 'Error'}</p>
            )}
          </div>
          <input
            className="auth-input"
            type="text"
            placeholder={dictionary.placeholders.confirmEmail}
            {...register('confirmEmail')}
          ></input>
          <div className="error-string">
            {errors?.confirmEmail?.message && (
              <p>{dictionary.errors[errors.confirmEmail.message] ?? 'Error'}</p>
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
              <p>{dictionary.errors[errors.password.message] ?? 'Error'}</p>
            )}
          </div>
          <input
            className="auth-input"
            type="password"
            role="textbox"
            placeholder={dictionary.placeholders.confirmPassword}
            {...register('confirmPassword')}
          ></input>
          <div className="error-string">
            {errors?.confirmPassword?.message && (
              <p>
                {dictionary.errors[errors.confirmPassword.message] ?? 'Error'}
              </p>
            )}
          </div>
          <div className="buttons-container">
            <div>
              <Link to={'/sign-in'}>{dictionary.auth.signIn}</Link>
              <p className="auth-description">{dictionary.auth.ifRegistred}</p>
            </div>
            <button type="submit" className="submit-button" disabled={!isValid}>
              {dictionary.auth.submit}
            </button>
          </div>
        </form>
        )}
    </>
  );
};
