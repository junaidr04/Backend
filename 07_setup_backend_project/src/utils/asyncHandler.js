const asyncHandler=(requestHandler) =>{
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    }
} //asyncHandler is a function that takes a function as an argument and returns a new function that wraps the original function in a try-catch block. If the original function throws an error, the error is passed to the next middleware function in the Express.js application.



export { asyncHandler };




//const asynHandler =() => {}
//const asyncHandler = (fn) => () => {}
//const asyncHandler = (fn) => async () => {}

//const asyncHandler = (fn) => async (req, res, next) => {}

/*
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message || "Internal Server Error",
        });
    }
};
*/