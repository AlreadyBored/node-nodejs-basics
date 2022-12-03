import {access, constants} from "node:fs/promises";

export const isTargetAccessible = async (target) => {
    let isTargetExist;
    try {
        isTargetExist = true;
        await access(target, constants.R_OK);
    } catch(error) {
        isTargetExist = false;
    }

    return isTargetExist;
};
