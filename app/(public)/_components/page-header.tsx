export default function PageHeader({ title, description }: { title: string, description: string }) {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl text-primary dark:text-white">
                    {title}
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                    {description}
                </p>
            </div>
        </div>
    );
}