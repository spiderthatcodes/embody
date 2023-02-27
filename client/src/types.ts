export interface BlogType {
    _id: string;
    title: string;
    text: string;
    imageUrl?: string;
}

export interface UserType {
    _id: string,
    name: string,
    email: string
}

export interface NumberedCardProps {
    number: string,
    heading: string,
    text: string
}
