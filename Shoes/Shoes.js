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

// Be careful at naming things
// Models generally start with a capital letter = Shoe
const shoe = model("Shoe", shoeSchema)

export default shoe