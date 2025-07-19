const asyncHandler = (requestHandler) => {
    //returns a function 
    return (req,res, next) => {
        Promise.resolve(requestHandler(req,res,next))
        .catch( (error) => {
            next(error);
        })
    }
}

export {asyncHandler};