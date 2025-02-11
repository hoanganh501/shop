import mongoose from "mongoose";

const ProductImageSchema = new mongoose.Schema(
  {
    variant: {
      type: mongoose.Types.ObjectId,
      ref: "ProductVariant",
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);
const ProductImage = mongoose.model("ProductImage", ProductImageSchema);
export default ProductImage;
