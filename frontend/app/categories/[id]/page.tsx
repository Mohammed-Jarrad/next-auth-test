import React from "react";

const CategoryPage = async ({ params: { id } }: { params: { id: string } }) => {
    return <div>CategoryPage {id}</div>;
};

export default CategoryPage;
