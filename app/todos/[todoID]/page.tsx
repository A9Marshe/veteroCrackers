export default async function SingleToDoPage({ params }: { params: Promise<{ todoID: string }> }) {
    const todoID = (await params).todoID;
    return <div>{todoID}: Todo</div>;
}
