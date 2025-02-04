const ROLES = {
  admin: [
    "view:products",
    "create:products",
    "update:products",
    "delete:products",

    "view:users",
    "create:users",
    "update:users",
    "delete:users",

    "view:brands",
    "create:brands",
    "update:brands",
    "delete:brands",

    "view:categories",
    "create:categories",
    "update:categories",
    "delete:categories",
  ],
  user: ["view:products"],
};

export default ROLES;
