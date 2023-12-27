import { dateTimeFormat } from "@/utiles/dateTime";
import { actionGetBoards } from "./action"
import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';


export const revalidate = 0         // want to 실시간 랜더링  in SSR 
export default async function page() {
    const data = await actionGetBoards();

    return (
        <div>

            <a href="/">
                <Button color="dark">Home</Button>
            </a>

            <div className="overflow-x-auto">

                <Table hoverable>
                    <TableHead>
                        <TableHeadCell>id</TableHeadCell>
                        <TableHeadCell>code</TableHeadCell>
                        <TableHeadCell>title</TableHeadCell>
                        <TableHeadCell>writeDate</TableHeadCell>
                    </TableHead>
                    <TableBody>
                        {
                            data?.length ?
                                data?.map((item, index) => {

                                    const dateTime = dateTimeFormat(item.create_dtm)
                                    return (
                                        <TableRow key={item.id}>
                                            <TableCell>{item.id}</TableCell>
                                            <TableCell>{item.board_code}</TableCell>
                                            <TableCell><a href={`/board/${item.id}`}>{item.title}</a></TableCell>
                                            <TableCell>{dateTime}</TableCell>
                                        </TableRow>
                                    )
                                })
                                : <TableRow><TableCell colSpan={3}>no data</TableCell></TableRow>
                        }

                    </TableBody>
                </Table>
            </div>

            <a href="/board/write">
                <Button color="red">작성</Button>
            </a>

        </div>
    )
}
