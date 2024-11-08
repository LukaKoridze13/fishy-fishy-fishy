import RoleModel from "../models/RoleModel";

async function initializeRoles() {
  const roles = ["user", "superadmin"];

  for (const roleName of roles) {
    const existingRole = await RoleModel.findOne({ name: roleName });
    if (!existingRole) {
      await RoleModel.create({ name: roleName });
    }
  }
}

export default initializeRoles;
