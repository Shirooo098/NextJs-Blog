
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
    id: number;
    title: string;
    category: string;
    date: string;
    description: string;
    imageUrl: string;
}

export type CardProps = {
    title: string, 
    date: string, 
    category: string,
    imageUrl: string,
}

export type CategoryType = 'Web-Development' | 'Javascript' | 'Productivity' | 'Projects';