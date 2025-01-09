import Header_Model from "../../models/Header.js";

export const createHeader = async (_, args,{ input }) => {
    try {
        const existingHeader = await Header_Model.findOne({
            where: { slug: input.slug }
        });

        if (existingHeader) {
            throw new Error('Slug must be unique');
        }
c
        const newHeader = await Header_Model.create({
            title: input.title,
            slug: input.slug,
            parent_id: input.parent_id
        });

        if (!newHeader) {
            throw new Error('Header creation failed');
        }

        return {
            message: "Header created successfully"
        };

    } catch (error) {
        throw new Error(`Header could not be created: ${error.message}`);
    }
};