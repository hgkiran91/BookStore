import { Schema, model } from 'mongoose';

const userDetailsSchema = new Schema(
    {
        Name: {
          type: String
        },
        PhoneNumber: {
            type: String
        },
        Pincode: {
            type: String
        },
        Locality: {
            type: String
        },
        Address: {
            type: String
        },
        City: {
            type: String
        },
        Landmark: {
            type: String
        },
        Type: {
            type: String
        }
    }
)

export default model('UserDetails', userDetailsSchema);