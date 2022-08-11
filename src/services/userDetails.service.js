import userDetails from "../models/userDetails.model";

//create new userDetails
export const addUserDetails = async (body) => {
    const data = await userDetails.create(body);
    return data;
}