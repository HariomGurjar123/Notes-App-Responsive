import { User } from "../models/user.model.js";
import { ApiError } from "../util/ApiError.js";
import { ApiResponse } from "../util/ApiResponse.js";
import { asyncHandler } from "../util/asyncHandler.js";

/*
const generateAccessAndRefreshToken = async (userId)=>{
    try {
        
        const user = await User.findById(userId)
        const AccessToken = user.generateAcessToken();
        const RefreshToken = user.generateRefreshToken();

        user.RefreshToken=RefreshToken;
        await user.save({validateBeforeSave:false});
        return {AccessToken, RefreshToken}

    } catch (error) {
        throw new ApiError(500,"something went wrong while generating both token")        
    }
}
*/

const registerUser = asyncHandler(async(req,res)=>{
    const {email,password,name} = req.body;

    if([email,password,name].some((field)=>field.trim()===""))
    {
        throw new ApiError(400,"all field required")
    }

    const existedUser = await User.findOne({email})

    if(existedUser) 
    {
        throw new ApiError(400 ,"user already exist")
    }

    const user = await User.create({
        email,
        password,
        name
    })

    if(!user)
    {
        throw new ApiError(401,"something went wrong while registering user")
    }
    
    const createdUser = await User.findById(user._id).select("-password")

    return res
    .status(200)
    .json(new ApiResponse(200,createdUser,"User Created Successfully"))
})








const loginUser = asyncHandler(async(req,res)=>{
    const {email , password} = req.body;

    if(!email)
    {
        throw new ApiError(400,"all field required in login")
    }

    const user = await User.findOne({email});
    if(!user) 
        {
            throw new ApiError(404,"user does not found")
        } 

    const isPasswordCorrect = await user.isPasswordCorrect(password);
    if(!isPasswordCorrect)
    {
        throw new ApiError(404,"passoword is incorrect")
    }


    // const {AccessToken , RefreshToken} = await generateAccessAndRefreshToken(user._id)

    const loggedInUser = await User.findById(user._id).select("-password")

    // const options = {
    //     httpOnly:true,
    //     secure:true
    // };

    return res
    .status(200)
    // .cookie("AccessToken",AccessToken,options)
    // .cookie("RefreshToken",RefreshToken,options)
    .json({success:true,loggedInUser:{email:loggedInUser.email},message:"user loggedIn successfully",name:{name:user.name}})


})
const changePassword=asyncHandler(async(req,res)=>{

    const {oldPassword,newPassword,email} = req.body;

    if(!oldPassword && !newPassword){
        throw new ApiError(400,"both field required")
    }

    const user = await User.findOne({email})
    const isPasswordValid = await user.isPasswordCorrect(oldPassword)

    if(!isPasswordValid)
    {
        throw new ApiError(404,"password not found")
    }

    user.password = newPassword
    await user.save({validateBeforeSave:false})

    return res
    .status(200)
    .json(new ApiResponse(200,{},"password change successfully"))

})

// const changeValidators=asyncHandler(async(req,res)=>{})


    export {registerUser,loginUser,changePassword}
