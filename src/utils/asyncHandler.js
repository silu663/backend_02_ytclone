const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// ****************** using the try catch method ****************

// const asyncHandler = (fn) => {() =>{}}  to exicute the heigherorder function

// const asyncHandler = (fn) => async(req,res,next) =>{
//     try {
//         await fn(req,res,next)

//     } catch (error) {
//       res.status(error.code || 500)
//     }
// }
