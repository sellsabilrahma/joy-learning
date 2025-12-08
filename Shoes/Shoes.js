import { schema, model } from "mongoose";

const shoeSchema = new schema ({
    shoeName: {
        type: string
    },
    shoeSize: {
        type: sring
    },
    shoePrice: {
        type: string
    },
}
)

const shoe = model("Shoe", shoeSchema)

export default shoe