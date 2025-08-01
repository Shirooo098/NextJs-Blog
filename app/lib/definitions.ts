
export type State = {
    errors?: {
        title?: string[],
        category?: string[],
        description?: string[],
        image?: string[] 
    };
    message?: string | null
}

export type EmailState = {
    errors?: {
        name?: string[],
        email?: string[], 
        subject?: string[],
        message?: string[],
    };
    errorMessage: string | null,
}

export type Blogs = {
    id: string;
    title: string;
    category: string;
    date: string;
    description: string;
    imageUrl: string;
}

export type CardProps = {
    id: string,
    title: string, 
    date: string, 
    category: string,
    imageUrl: string,
}

export type BlogContent = {
    id: string;
    title: string;
    category: string;
    date: string;
    description: string;
    imageUrl: string;
}

export type Param = string | number;

export type CategoryType = 'Web-Development' | 'Javascript' | 'Productivity' | 'Projects';