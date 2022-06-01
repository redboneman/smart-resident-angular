export function formatDate(date: string) {
    if (!date) return 'INVALID DATE';
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    return `${day < 10 ? '0' : ''}${day}/${month + 1 < 10 ? '0' : ''}${month + 1}/${year}`;
}
