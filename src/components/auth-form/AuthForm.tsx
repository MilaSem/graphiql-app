import { type FC, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, logIn } from '../../firebase';
import { useForm, type FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaAuth } from '../../yup/Schema';
import { Loader } from '../../components/loader/Loader';
import './AuthForm.scss';

export const AuthForm: FC = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
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
    localStorage.removeItem('error');
    customError = '';
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
          <h3 className="registration-header">Sign-in</h3>
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
            placeholder="Enter password"
            {...register('password')}
          ></input>
          <div className="error-string">
            {errors?.password && <p>{errors?.password?.message ?? 'Error'}</p>}
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
          <div>{customError}</div>
        </form>
        )}
    </>
  );
};
