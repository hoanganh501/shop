import mongoose from "mongoose";

const ProductVariantSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    description: {
      type: String,
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
const ProductVariant = mongoose.model("ProductVariant", ProductVariantSchema);
export default ProductVariant;
