export interface Income {
    clientId: string;
    income: number;
}

export interface Suggestion {
    title: string;
    description: string;
    link: string;
}

export interface SuggestionResponse {
    clientId: string;
    suggestions: Suggestion[];
}