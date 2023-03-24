
import './otp.css'
export default function otp() {
    return(

        <>
        <div className="container height-100 d-flex justify-content-center align-items-center">
  {" "}
  <div className="position-relative">
    {" "}
    <div className="card p-2 text-center">
      {" "}
      <h6>
        Please enter the one time password <br /> to verify your account
      </h6>{" "}
      <div>
        {" "}
        <span>A code has been sent to</span> <small>*******9897</small>{" "}
      </div>{" "}

      
        {" "}
        <input
          className="m-2 text-center form-control rounded"
          type="text"
          id="first"
          maxLength={6}
        />


      {" "}
      <div className="mt-4">
        {" "}
        <button className="btn btn-danger px-4 validate">Validate</button>{" "}
      </div>{" "}
    </div>{" "}
    <div className="card-2">
      {" "}
      <div className="content d-flex justify-content-center align-items-center">
        {" "}
        <span>Didn't get the code</span>{" "}
        <a href="#" className="text-decoration-none ms-3">
          Resend(1/3)
        </a>{" "}
      </div>{" "}
    </div>{" "}
  </div>
</div>

        </>
    )
}