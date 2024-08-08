import { registerUserAction } from "@/data/actions/auth-actions";
import { useFormState } from "react-dom";
import { ZodErrors } from "../custom/ZodErrors";

function AuthForm(props) {
    const INITIAL_STATE = {
        data: null,
      };

      
    const [formState, formAction] = useFormState(registerUserAction, INITIAL_STATE);

    console.log(formState)

    return ( <form action={formAction}  style={{maxWidth:"400px",margin:"0 auto", marginTop:"2rem"}} >
        
        <h1 className="h3 mb-3 fw-normal">{props.title}</h1>
    
        <div className="form-floating">
          <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com"/>
          <label htmlFor="floatingInput">Email address</label>
          <ZodErrors error={formState?.zodErrors?.email} />
        </div>
        <div className="form-floating" style={{marginTop:"1rem"}}>
          <input type="password" className="form-control" id="password" name="password" placeholder="Password"/>
          <label htmlFor="floatingPassword">Password</label>
          <ZodErrors error={formState?.zodErrors?.password} />
        </div>
    
        <div className="form-check text-start my-3">
          <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">Login</button>
        <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
      </form> );
}

export default AuthForm;