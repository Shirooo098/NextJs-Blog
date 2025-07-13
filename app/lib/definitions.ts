export type CategoryType = 'Web-Development' | 'Javascript' | 'Productivity' | 'Projects';

export function isCategoryType(category: string): category is CategoryType{
    return ['Web-Development', 'Javascript', 'Productivity', 'Projects'].includes(category)
}
export type State = {
    errors?: {
        title?: string[],
        category?: string[],
        description?: string[],
        image?: string[] 
    };
    message?: string | null
}