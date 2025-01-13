const ROLES = {
  admin: [
    "view:comments",
    "create:comments",
    "update:comments",
    "delete:comments",
  ],
  user: ["view:", "create:"],
};

function hasPermission(user, permission) {
  const rolePermissions = ROLES[user.role];
  if (!rolePermissions) {
    throw new Error(`Role "${user.role}" không tồn tại.`);
  }
  return rolePermissions.includes(permission);
}

export { hasPermission };

export default ROLES;
