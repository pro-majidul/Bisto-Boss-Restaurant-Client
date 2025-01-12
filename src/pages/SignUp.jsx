import { Link, useNavigate } from 'react-router-dom';
import AuthenticationImg from '../assets/others/authentication2.png'
import bgImage from '../assets/others/authentication.png'
import useUsers from '../hooks/useUsers';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form"
import { Helmet } from 'react-helmet-async';
import usePublicAxios from '../hooks/usePublicAxios';
import SocialLogins from '../components/SocialLogins';



const SignUp = () => {
    const { userSignUp, setUsers, UserProfileUpdate } = useUsers()
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const publicAxios = usePublicAxios()
    const onSubmit = async (data) => {
        // console.log(data)
        try {
            const result = await userSignUp(data.email, data.password)
            await UserProfileUpdate(data.name, data.photo)

            const userInfo = {
                name: data.name,
                email: data.email,
            }
            const response = await publicAxios.post('/users', userInfo)
            // console.log(response);
            setUsers(result.user)
            navigate('/')
            toast.success('Signup Successful')
        } catch (error) {
            toast.error('Signup failed')
            // console.log(error);
        }
    }
    // const handelUserCreate = async e => {
    //     e.preventDefault()
    //     const form = e.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     try {
    //         await userSignUp(email, password)
    //             .then(result => {
    //                 setUsers(result.user)
    //                 console.log(result.user);
    //                 navigate('/')
    //                 toast.success('User Created Successfully')
    //             })
    //     } catch (error) {
    //         console.log(error);
    //         toast.error('User Not Created')
    //     }

    // };

    return (
        <section style={{
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }} className='flex items-center justify-center min-h-screen' >

            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className='md:flex items-center justify-center gap-5 md:p-10 rounded-xl shadow-2xl dark:text-black border-4 w-10/12 mx-auto '>

                <div className="w-full max-w-lg p-8 space-y-3 rounded-xl ">
                    <h1 className="text-2xl font-bold text-center text-black">Sign Up</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-black">
                        <div className="space-y-1 text-sm">
                            <label className="block ">Name</label>
                            <input  {...register("name", { required: true })} type="text" name="name" placeholder="Type here" className="w-full px-4 py-3 rounded-md" />
                            {errors.name && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label className="block ">Photo</label>
                            <input  {...register("photo", { required: true })} type="ulr" name="photo" placeholder="Enter Your Photo URL" className="w-full px-4 py-3 rounded-md " />
                            {errors.photo && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label className="block ">Email</label>
                            <input   {...register("email", { required: true })} type="email" name="email" placeholder="Type here" className="w-full px-4 py-3 rounded-md " />
                            {errors.email && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label className="block ">Password</label>
                            <input  {...register("password", { required: true, maxLength: 20, minLength: 6, pattern: /(?=.*\d)(?=.*[a-zA-Z])/ })} type="password" name="password" placeholder="Enter Your Password" className="w-full px-4 py-3 rounded-md " />
                            {errors.password?.type === "required" && (
                                <p className='text-red-500'>Password is required</p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p className='text-red-500'>password must less than 20 charecter</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className='text-red-500'>password must have 6 charecter</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className='text-red-500'>password must have one uppercase one lowercase and one digit</p>
                            )}

                        </div>

                        <button className="block w-full p-3 text-center rounded-sm text-white  bg-[#D1A054B3]">Sign in</button>
                    </form>

                    <p className="text-md text-center sm:px-6 text-[#D1A054B3]">Already Register?
                        <Link to='/login' className="font-bold hover:text-purple-500">Go to Login</Link>
                    </p>

                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        <p className="px-3 text-md ">or Sign Up With</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    </div>
                    {/* <div className="flex justify-center space-x-4">
                        <button aria-label="Log in with Google" className="p-3 hover:bg-purple-500 rounded-full border-gray-600 border">
                            <FaFacebookF size={24} color='gray' />
                        </button>
                        <button aria-label="Log in with Twitter" className="p-3 hover:bg-purple-500 rounded-full border-gray-600 border">
                            <FaGoogle size={24} color='gray' />
                        </button>
                        <button aria-label="Log in with GitHub" className="p-3 hover:bg-purple-500 rounded-full border-gray-600 border">
                            <FaGithub size={24} color='gray' />
                        </button>
                    </div> */}
                    <SocialLogins></SocialLogins>

                </div>
                <div>
                    <img src={AuthenticationImg} alt="" />
                </div>
            </div>

        </section>
    );
};

export default SignUp;