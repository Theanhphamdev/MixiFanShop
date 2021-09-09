import { useState } from "react"
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { signup } from "./../../Api/AuthApi"
import { authenticated } from '../../auth';
const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const onSubmit = async (data) => {
        try {
            const response = await signup(data);
            authenticated(response.data.user);
            setSuccess(true);
        } catch (error) {
            setSuccess(false);
            setError(error.response.data)
        }
    }

    return (
        
        <form className="mt-5 col-6 mx-auto" onSubmit={handleSubmit(onSubmit)}>
            {error && <div className="alert alert-danger mb-2">{error}</div>}
            {success && <div className="alert alert-success mb-2">Bạn đã đăng ký thành công. Click <Link to="/signin">vào đây</Link> để Login</div>}

            <h2>Đăng ký</h2>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" {...register('username')} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"  {...register('email')} />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password"  {...register('password')} />
            </div>

            <button type="submit" className="btn btn-primary">Đăng ký</button>
        </form>
    )
}

export default Signup
