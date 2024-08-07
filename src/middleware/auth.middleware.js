// import { User } from "../models/user.model.js";
// import { ApiError } from "../util/ApiError.js";
// import { asyncHandler } from "../util/asyncHandler.js";
// import jwt from "jsonwebtoken";

import { registerUser } from "../controller/user.controller.js";
import { asyncHandler } from "../util/asyncHandler.js";

// export const verifyJWT = asyncHandler(async(req,_,next)=>{
// try {
//       const token = req.cookies?.AccessToken || req.header("Authorization")?.replace("Bearer ","")
    
//       if(!token)
//       {
//         throw new ApiError(401,"no Token Provided")
//       }
//        const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
//        if(!decodedToken)
//        {
//         throw new ApiError(401,"invalid token verification failed")
//        }
    
//        const user = await User.findById(decodedToken._id).select("-password -RefreshToken")
//        if(!user)
//        {
//         throw new ApiError(404,"user not found: invalid token")
//        }
    
    
//        req.user = user;
//        next()
// } catch (error) {
 
//     throw new ApiError(400,error.message || "invalid token last")
// }

// })  




