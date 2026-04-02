
type StackBadgeProps = {
    name: string;
}

export const StackBadge = ({ name }: StackBadgeProps) => {
    return (
        <span className="bg-white/10 backdrop-blur-md text-sm font-medium px-3 py-1 rounded-full">
            {name}
        </span>
    )
}