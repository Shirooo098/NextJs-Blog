export type State = {
    errors?: {
        title?: string[],
        category?: string[],
        description?: string[],
        image?: string[] 
    };
    message?: string | null
}

export type Blogs = {
    id: string;
    title: string;
    category: string;
    date: string;
    description: string;
    imageUrl: string;
}

export type CategoryType = 'Web-Development' | 'Javascript' | 'Productivity' | 'Projects';