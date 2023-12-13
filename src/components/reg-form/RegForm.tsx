import { type FC, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, registerUser } from '../../firebase';
import { useForm, type FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaReg } from '../../yup/Schema';
import { Loader } from '../../components/loader/Loader';
import './RegForm.scss';

export const RegForm: FC = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

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

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/main');
  }, [user, loading]);

  return (
    <>
      {loading
        ? (
        <Loader />
        )
        : (
        <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="registration-header">Registration</h3>
          <input
            type="text"
            placeholder="Enter your name"
            {...register('name')}
          ></input>
          <div className="error-string">
            {errors?.name && <p>{errors?.name?.message ?? 'Error'}</p>}
          </div>
          <input
            type="text"
            placeholder="Enter email"
            {...register('email')}
          ></input>
          <div className="error-string">
            {errors?.email && <p>{errors?.email?.message ?? 'Error'}</p>}
          </div>
          <input
            type="text"
            placeholder="Confirm email"
            {...register('confirmEmail')}
          ></input>
          <div className="error-string">
            {errors?.confirmEmail && (
              <p>{errors?.confirmEmail?.message ?? 'Error'}</p>
            )}
          </div>
          <input
            type="text"
            placeholder="Enter password"
            {...register('password')}
          ></input>
          <div className="error-string">
            {errors?.password && <p>{errors?.password?.message ?? 'Error'}</p>}
          </div>
          <input
            type="text"
            placeholder="Confirm password"
            {...register('confirmPassword')}
          ></input>
          <div className="error-string">
            {errors?.confirmPassword && (
              <p>{errors?.confirmPassword?.message ?? 'Error'}</p>
            )}
          </div>
          <button type="submit" className="submit-button" disabled={!isValid}>
            Submit
          </button>
        </form>
        )}
    </>
  );
};
