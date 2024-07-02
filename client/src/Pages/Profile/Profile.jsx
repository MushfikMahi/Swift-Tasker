import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet";
const Profile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const handelProfileUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateUser(name, photo);
  };
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/indian-rupee-coins-falling-background_23-2148010964.jpg?t=st=1719181066~exp=1719184666~hmac=bafc02ff16d3afbc686969f3fdc704cd6120b9ef1009506549992568909a6c77&w=996)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content my-20">
        <div className="glass p-5 md:p-10 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col items-center space-y-5">
              <img
                className="h-32 rounded-full border-[#008080] border-4"
                src={user.photoURL}
                alt=""
              />
              <h3 className="text-3xl font-bold">Name : {user.displayName}</h3>
              <p className="text-xl">Email : {user.email}</p>
            </div>
            <div>
              <div>
                <Helmet>
                  <title>Artistry - Profile</title>
                </Helmet>
                <div className="hero-content flex-col">
                  <div className="text-center">
                    <h1 className="text-5xl font-bold text-white">
                      Update Now!
                    </h1>
                  </div>
                  <div className="w-full rounded-2xl p-5 max-w-md shadow-2xl">
                    <form onSubmit={handelProfileUpdate}>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-white">Name</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="name"
                          className="input input-bordered bg-transparent"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-white">
                            Password
                          </span>
                        </label>
                        <input
                          type="text"
                          name="photo"
                          placeholder="PhotoURL"
                          className="input input-bordered bg-transparent"
                        />
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn  bg-transparent w-full border-[#008080] hover:border-transparent text-white hover:bg-[#008080]">
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
