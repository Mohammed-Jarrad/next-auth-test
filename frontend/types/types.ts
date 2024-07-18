export type TCategory = {
    _id: string;
    name: string;
    slug: string;
    image: {
        secure_url: string;
        public_id: string;
    };
    status: string;
    createdBy: string;
    updatedBy: string;
    createdAt: string;
    updatedAt: string;
    subcategory: never[];
};

export type ResGetCategories = { categories: TCategory[]; message: string };

export type LoginResponse = {
    token: string;
    message: string;
};
