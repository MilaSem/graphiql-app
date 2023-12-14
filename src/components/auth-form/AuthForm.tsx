import { type FC, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
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
    reset();
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/main');
  }, [user, loading]);

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
          <h3 className="auth-header">Sign-in</h3>
          <input
            className="auth-input"
            type="text"
            placeholder="Enter email"
            {...register('email')}
          ></input>
          <div className="error-string">
            {errors?.email && <p>{errors?.email?.message ?? 'Error'}</p>}
          </div>
          <input
            className="auth-input"
            type="text"
            placeholder="Enter password"
            {...register('password')}
          ></input>
          <div className="error-string">
            {errors?.password && <p>{errors?.password?.message ?? 'Error'}</p>}
          </div>
          <div className="buttons-container">
            <div>
              <Link to={'/sign-up'}>Sign-up</Link>
              <p className="auth-description">if you are not registred</p>
            </div>
            <button type="submit" className="submit-button">
              Log-in
            </button>
          </div>
          <div className="error-string">{customError}</div>
        </form>
        )}
    </>
  );
};
