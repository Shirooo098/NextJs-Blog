export type CategoryType = 'Web-Development' | 'Javascript' | 'Productivity' | 'Projects';

export type State = {
    errors?: {
        title?: string[],
        category?: string[],
        description?: string[],
        image?: string[] 
    };
    message?: string | null
}