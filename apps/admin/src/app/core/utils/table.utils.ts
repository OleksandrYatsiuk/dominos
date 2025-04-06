import { Table } from "primeng/table";

export function tableGlobalFilter(table: Table, event: Event) {
    const target = event.target as HTMLInputElement;
    return table.filterGlobal(target.value, 'contains')
}