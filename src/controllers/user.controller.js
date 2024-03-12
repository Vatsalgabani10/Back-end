import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiErr, ApiError } from "../utils/ApiError.js"


const registerUser = asyncHandler(async (req, res) => {
    //get user details from frontend
    //validation-not empty
    //user existance checking by username and email
    //check for images and avatar
    //upload them to cloudinary, avatar
    //create user object - create entry in db
    //remove pasword and refresh token feild from response
    //check for user creation
    //return response 

    const { fullName, email, username, password } = req.body
    console.log( "email:", email);

    if ([fullName, email, username, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields  are required");
    }

    const existedUser = User.findOne({
        $or: [{ username }, {email}] 
    })

    if (existedUser)
    {
        throw new ApiError(409,"User with email or username already exists")
     }

    const avatarLocalPath = req.files?.avatar[0]?.path;

    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) { 
        coverImageLocalPath= req.files.coverImage[0].path;  
    }

    if (!avatarLocalPath) { 
        throw new ApiError(400, "Avatar file is required")
    }

    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

    const createUser = await User.find


    







})
export { registerUser }