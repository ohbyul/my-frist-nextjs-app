import { dateTimeFormat } from "@/utiles/dateTime";
import { actionGetDtxNotices } from "./action";
import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';

interface notice {
    id: number;
    bbsKindCd: string;
    title: string;
    createLoginId: string;
    createDtm: string;
}

export const revalidate = 0
export default async function page() {

    const result = await actionGetDtxNotices();
    const notices: notice[] = result?.data;
    const totalCount: number = result?.data?.length

    return (
        <div>

            <a href="/">
                <Button color="dark">Home</Button>
            </a>

            <div>공지사항 총 {totalCount} 개</div>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <TableHead>
                        <TableHeadCell>No.</TableHeadCell>
                        <TableHeadCell>code</TableHeadCell>
                        <TableHeadCell>title</TableHeadCell>
                        <TableHeadCell>writer</TableHeadCell>
                        <TableHeadCell>writeDate</TableHeadCell>
                    </TableHead>
                    <TableBody>
                        {
                            notices?.length ?
                                notices?.map((item: notice, index: number) => {

                                    const dateTime = dateTimeFormat(item.createDtm)
                                    return (
                                        <TableRow key={item.id}>
                                            <TableCell>{item.id}</TableCell>
                                            <TableCell>{item.bbsKindCd}</TableCell>
                                            <TableCell>{item.title}</TableCell>
                                            <TableCell>{item.createLoginId}</TableCell>
                                            <TableCell>{dateTime}</TableCell>
                                        </TableRow>
                                    )
                                })
                                : <TableRow><TableCell colSpan={4}>no data</TableCell></TableRow>
                        }

                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
