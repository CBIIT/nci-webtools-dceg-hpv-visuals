
import { useState } from "react";
import { useRecoilState } from "recoil";
import { Table, Pagination, Form } from "react-bootstrap";
import { exploreState } from "./view.state";

import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    useReactTable,
} from "@tanstack/react-table";

export default function ExploreTable({ results = [] }) {
    //const [sorting, setSorting] = useState([{ id: "name", desc: false }]);
    const [columnFilters, setColumnFilters] = useState([]);
    const [active, setActive] = useState(0);
    const [explore, setExplore] = useRecoilState(exploreState)

    const columnNames = Object.keys(results[0]).filter((key) => !key.startsWith("_"));

    const hpvaveColumns = columnNames.map((key) => ({
        Header: key,
        accessorKey: key,
        className: "text-nowrap align-middle",
        //sortingFn: getSortMethod(key),
    }))

    const table = useReactTable({
        data: results,
        columns: hpvaveColumns,
        state: {
            columnFilters,
            // sorting,
        },
        /*sortingFns: {
          positionSort,
          localeSort,
        },*/
        onColumnFiltersChange: setColumnFilters,
        // onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <>
            <Table striped hover responsive>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} colSpan={header.colSpan} className={header.column.columnDef.className}>
                                    {header.isPlaceholder ? null : (
                                        <>
                                            <div className={header.column.getCanSort() ? "cursor-pointer" : ""} onClick={header.column.getToggleSortingHandler()}>
                                                {flexRender(header.column.columnDef.header, header.getContext())}
                                                {{
                                                    asc: <i className="bi bi-sort-up ms-1" />,
                                                    desc: <i className="bi bi-sort-down ms-1" />,
                                                }[header.column.getIsSorted()] ?? null}
                                            </div>
                                            <div>
                                                <Form.Control type="input" onChange={(e) => header.column.setFilterValue(e.target.value)} placeholder={"Filter..."} />
                                            </div>
                                        </>
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr
                            onClick={() => {
                                setActive(row.original._id);
                                setExplore(results.find((e) => e._id === row.original._id))
                            }}
                            className={active === row.original._id ? "active-row" : ""}
                            key={row.original._id}
                        >
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className={cell.column.columnDef.className}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}