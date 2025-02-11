import mongoose from "mongoose";
import Enum from "../config/Enum";

const OrderSchema = new mongoose.Schema(
  {
    number: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    payment: {
      type: String,
      enum: Object.values(Enum.PaymentGateway),
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(Enum.StatusType),
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model("Order", OrderSchema);
export default Order;
