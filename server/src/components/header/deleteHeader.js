import Header  from "../../models/Header.js";

export const deleteHeader = async (_, args,{ id }) => {
    try {
        const deleted = await Header.destroy({
            where: { id }
        });
        return deleted > 0;
    } catch (error) {
        throw new Error('Header could not be deleted');
    }
};