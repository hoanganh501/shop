import mongoose from "mongoose";

const DetailOrderSchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    variant: {
      type: mongoose.Types.ObjectId,
      ref: "ProductVariant",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const DetailOrder = mongoose.model("DetailOrder", DetailOrderSchema);
export default DetailOrder;
