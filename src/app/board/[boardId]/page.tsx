
import { dateTimeFormat } from "@/utiles/dateTime";
import { actionGetBoardInfo } from "../action";
import { Button } from "flowbite-react";

export default async function page({ params }: { params: { boardId: string } }) {
    const id = params.boardId
    const data = await actionGetBoardInfo(id);

    return (
        <div>

            <a href="/board">
                <Button color="dark">↩ 목록</Button>
            </a>

            <div>상세 페이지</div>

            <table>
                <tbody>
                    <tr>
                        <th>id</th>
                        <td>{data?.id}</td>
                    </tr>
                    <tr>
                        <th>제목</th>
                        <td>{data?.title}</td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>{data?.contents}</td>
                    </tr>
                    <tr>
                        <th>code</th>
                        <td>{data?.board_code}</td>
                    </tr>
                    <tr>
                        <th>writeDate</th>
                        <td>{dateTimeFormat(data?.create_dtm)}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
